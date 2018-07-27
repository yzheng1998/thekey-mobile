import React, { Component } from 'react'
import { Modal, FlatList, Platform, TouchableOpacity } from 'react-native'
import {
  Background,
  ScrollScreen,
  SearchNameContainer,
  PeopleListContainer,
  Text,
  ThinDivider,
} from './styles'
import TagInput from 'react-native-tag-input'
import { ListItem } from 'react-native-elements'
import InterestsModalHeader from '../InterestsModalHeader'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const SEARCH_TAGS = gql`
  query tags($substr: String!) {
    tags(substr: $substr) {
      id
      name
    }
  }
`

const PeopleList = ({ peopleData, addParticipant }) => (
  <PeopleListContainer>
    <FlatList
      styles={{ backgroundColor: 'red', flex: 1 }}
      keyExtractor={person => person.id}
      data={peopleData}
      renderItem={({ item: person }) => (
        <TouchableOpacity>
          <ListItem
            onPress={() =>
              addParticipant(
                `${person.firstName} ${person.lastName}`,
                person.id,
              )
            }
            name={`${person.firstName} ${person.lastName}`}
            picture={person.profilePicture}
            subtitle={person.demographics.hometown}
          />
        </TouchableOpacity>
      )}
    />
  </PeopleListContainer>
)

export default class InterestsSearchModal extends Component {
  static navigationOptions = {
    header: 'Select your interests',
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
      placeholder: 'search',
      autoFocus: true,
      style: {
        fontSize: 14,
        marginVertical: Platform.OS === 'ios' ? 10 : -2,
      },
    }

    const { closeModal, ...rest } = this.props
    const handleCloseModal = () => {
      this.setState({
        text: '',
        users: [],
      })
      closeModal()
    }

    const participantIds = this.state.participants.map(
      participant => participant.id,
    )
    return (
      <Modal animationType="slide" {...rest}>
        <Background>
          <InterestsModalHeader
            handleClose={handleCloseModal}
            participantIds={participantIds}
            createNewChat={chatId =>
              this.props.navigation.navigate('Conversation', {
                chat: chatId,
              })
            }
            newChatButtonDisabled={this.state.newChatButtonDisabled}
          />
          <ThinDivider />
          <SearchNameContainer>
            <Text>Your interests: </Text>
            <TagInput
              value={this.state.tags}
              onChange={this.onChangeTags}
              labelExtractor={this.labelExtractor}
              text={this.state.text}
              onChangeText={this.onChangeText}
              tagColor="rgb(250, 53, 121)"
              tagTextColor="white"
              inputProps={inputProps}
              maxHeight={80}
              tagContainerStyle={{ height: 31 }}
            />
          </SearchNameContainer>
          <ThinDivider />
          <ScrollScreen>
            <Query query={SEARCH_TAGS} variables={variables}>
              {({ loading, error, data }) => {
                if (loading) return <Text>Loading...</Text>
                if (error) {
                  return <Text>Error! {error.message}</Text>
                }
                return (
                  <PeopleList
                    peopleData={data.tags}
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
