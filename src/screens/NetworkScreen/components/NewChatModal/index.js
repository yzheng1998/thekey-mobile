import React, { Component } from 'react'
import { Modal, FlatList, Platform } from 'react-native'
import {
  Background,
  ScrollScreen,
  SearchNameContainer,
  PeopleListContainer,
  Text,
  ThinDivider,
} from './styles'
import TagInput from 'react-native-tag-input'
import UserCard from '../../../../components/UserCard'
import NewChatModalHeader from '../NewChatModalHeader'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import LoadingWrapper from '../../../../components/LoadingWrapper'

const SEARCH_CONTACTS = gql`
  query contactsSearch($substr: String!) {
    contactsSearch(substr: $substr) {
      id
      profilePicture
      demographics {
        hometown
      }
      firstName
      lastName
    }
  }
`

const PeopleList = ({ peopleData, addParticipant }) => (
  <PeopleListContainer keyboardShouldPersistTaps="handled">
    <FlatList
      keyboardShouldPersistTaps="handled"
      styles={{ backgroundColor: 'red', flex: 1 }}
      keyExtractor={person => person.id}
      data={peopleData}
      renderItem={({ item: person }) => (
        <UserCard
          onPress={() =>
            addParticipant(`${person.firstName} ${person.lastName}`, person.id)
          }
          name={`${person.firstName} ${person.lastName}`}
          picture={person.profilePicture}
          subtitle={person.demographics.hometown}
        />
      )}
    />
  </PeopleListContainer>
)

export default class NewChatModal extends Component {
  static navigationOptions = {
    header: 'New Conversation',
  }
  state = {
    text: '',
    tags: [],
    participants: [],
    newChatButtonDisabled: true,
  }

  onChangeTags = tags => {
    if (tags.length > this.state.tags.length) {
      this.setState({ tags })
    } else {
      this.setState({
        tags,
        participants: this.state.participants.filter(participant =>
          tags.includes(participant.name),
        ),
        newChatButtonDisabled: !(tags.length > 0),
      })
    }
  }

  onChangeText = text => {
    this.setState({ text: text.trim() })
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible })
  }

  addParticipant = (name, id) => {
    this.setState({
      tags: [...this.state.tags, name],
      text: '',
      participants: [...this.state.participants, { id, name }],
      newChatButtonDisabled: false,
    })
  }

  labelExtractor = tag => tag

  render() {
    const variables = {
      substr: this.state.text,
    }
    const inputProps = {
      keyboardType: 'default',
      placeholder: this.state.tags.length ? '' : 'Search...',
      autoFocus: true,
      style: {
        fontSize: 14,
        marginVertical: Platform.OS === 'ios' ? 8.5 : -2,
      },
    }

    const { handleClose, isExistingChat, chatId, ...rest } = this.props
    const handleCloseModal = () => {
      this.setState(
        {
          text: '',
          tags: [],
        },
        () => handleClose(),
      )
    }

    const participantIds = this.state.participants.map(
      participant => participant.id,
    )
    return (
      <Modal animationType="slide" {...rest}>
        <Background>
          <NewChatModalHeader
            chatId={chatId}
            isExistingChat={isExistingChat}
            handleClose={handleCloseModal}
            participantIds={participantIds}
            createNewChat={id => {
              this.props.navigation.navigate('Conversation', {
                chat: id,
              })
              handleCloseModal()
            }}
            newChatButtonDisabled={this.state.newChatButtonDisabled}
          />
          <ThinDivider />
          <SearchNameContainer>
            <Text>To:</Text>
            <TagInput
              value={this.state.tags}
              onChange={this.onChangeTags}
              labelExtractor={this.labelExtractor}
              text={this.state.text}
              onChangeText={this.onChangeText}
              tagColor="rgb(250, 53, 121)"
              tagTextColor="white"
              tagTextStyle={{ fontSize: 14 }}
              inputProps={inputProps}
              scrollViewProps={{
                horizontal: true,
                showsHorizontalScrollIndicator: false,
              }}
              inputColor="black"
              maxHeight={800}
              tagContainerStyle={{
                borderRadius: 10,
                margin: 0,
                marginRight: 5,
                padding: 0,
                paddingLeft: 7,
                paddingRight: 7,
              }}
            />
          </SearchNameContainer>
          <ThinDivider />
          <ScrollScreen keyboardShouldPersistTaps="handled">
            <Query query={SEARCH_CONTACTS} variables={variables}>
              {({ loading, data }) => {
                if (loading) return <LoadingWrapper loading />
                return (
                  <PeopleList
                    peopleData={data.contactsSearch}
                    addParticipant={this.addParticipant}
                  />
                )
              }}
            </Query>
          </ScrollScreen>
        </Background>
      </Modal>
    )
  }
}
