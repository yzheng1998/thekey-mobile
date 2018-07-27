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
import InterestCard from './components/InterestCard'
import InterestsModalHeader from './components/InterestsModalHeader'
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

const InterestList = ({ interestData, addInterest }) => (
  <PeopleListContainer>
    <FlatList
      keyExtractor={interest => interest.id}
      data={interestData}
      renderItem={({ item: interest }) => (
        <InterestCard
          onPress={() => addInterest(`${interest.name}`, interest.id)}
          title={interest.name}
        />
      )}
    />
  </PeopleListContainer>
)

export default class InterestsSearchModal extends Component {
  state = {
    text: '',
    tags: [],
    interests: [],
    doneButtonDisabled: true,
  }

  onChangeTags = tags => {
    if (tags.length > this.state.tags.length) {
      this.setState({ tags })
    } else {
      this.setState({
        tags,
        interests: this.state.interests.filter(interest =>
          tags.includes(interest.name),
        ),
        doneButtonDisabled: !(tags.length > 0),
      })
    }
  }

  onChangeText = text => {
    this.setState({ text: text.trim() })
  }

  addInterest = (name, id) => {
    this.setState({
      tags: [...this.state.tags, name],
      text: '',
      interests: [...this.state.interests, { id, name }],
      doneButtonDisabled: false,
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

    const { closeModal, updateInterests, ...rest } = this.props
    const handleCloseModal = () => {
      this.setState({
        text: '',
        users: [],
      })
      closeModal()
    }

    return (
      <Modal animationType="slide" {...rest}>
        <Background>
          <InterestsModalHeader
            handleClose={handleCloseModal}
            interests={this.state.interests} // object
            updateInterests={updateInterests}
            doneButtonDisabled={this.state.doneButtonDisabled}
          />
          <ThinDivider />
          <SearchNameContainer>
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
                  <InterestList
                    interestData={data.tags}
                    addInterest={this.addInterest}
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
