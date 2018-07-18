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
import UserCard from '../UserCard'
import NewChatModalHeader from '../NewChatModalHeader'

const people = [
  {
    id: '1',
    firstName: 'Michele',
    lastName: 'Wang',
    profilePicture:
      'https://images.unsplash.com/photo-1531397776155-cf6b2831601b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ee628aa941c5a8f1d3bacc05987fb21b&auto=format&fit=crop&w=668&q=80',
    location: 'Fairfax, Virginia',
  },
  {
    id: '2',
    firstName: 'Diego',
    lastName: 'Covarrubias',
    profilePicture:
      'https://images.unsplash.com/photo-1531397776155-cf6b2831601b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ee628aa941c5a8f1d3bacc05987fb21b&auto=format&fit=crop&w=668&q=80',
    location: 'Fairfax, Virginia',
  },
  {
    id: '3',
    firstName: 'Shahd',
    lastName: 'Nara',
    profilePicture:
      'https://images.unsplash.com/photo-1531397776155-cf6b2831601b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ee628aa941c5a8f1d3bacc05987fb21b&auto=format&fit=crop&w=668&q=80',
    location: 'Fairfax, Virginia',
  },
  {
    id: '4',
    firstName: 'Yuke',
    lastName: 'Zheng',
    profilePicture:
      'https://images.unsplash.com/photo-1531397776155-cf6b2831601b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ee628aa941c5a8f1d3bacc05987fb21b&auto=format&fit=crop&w=668&q=80',
    location: 'Fairfax, Virginia',
  },
  {
    id: '5',
    firstName: 'Bliss',
    lastName: 'Perry',
    profilePicture:
      'https://images.unsplash.com/photo-1531397776155-cf6b2831601b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ee628aa941c5a8f1d3bacc05987fb21b&auto=format&fit=crop&w=668&q=80',
    location: 'Fairfax, Virginia',
  },
]

const PeopleList = ({ peopleData }) => (
  <PeopleListContainer>
    <FlatList
      styles={{ backgroundColor: 'red', flex: 1 }}
      keyExtractor={person => person.id}
      data={peopleData}
      renderItem={({ item: person }) => (
        <UserCard
          name={`${person.firstName} ${person.lastName}`}
          picture={person.profilePicture}
          location={person.location}
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
  }

  onChangeTags = tags => {
    this.setState({ tags })
  }

  onChangeText = text => {
    const lastTyped = text.charAt(text.length - 1)
    const parseWhen = [',', ' ']
    // make tag
    const cleanText = text.replace(',', '').trim()
    if (parseWhen.indexOf(lastTyped) > -1 && cleanText !== '') {
      this.setState({
        tags: [...this.state.tags, this.state.text.trim()],
        text: '',
      })
    } else {
      // don't make tag, let user keep typing
      this.setState({ text: text.trim() })
    }
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible })
  }

  labelExtractor = tag => tag

  render() {
    const inputProps = {
      keyboardType: 'default',
      placeholder: 'search',
      autoFocus: true,
      style: {
        fontSize: 14,
        marginVertical: Platform.OS === 'ios' ? 10 : -2,
      },
    }

    const { handleClose, ...rest } = this.props
    const handleCloseModal = () => {
      this.setState({
        text: '',
        users: [],
      })
      handleClose()
    }
    return (
      <Modal transition="slide" {...rest}>
        <Background>
          <NewChatModalHeader handleClose={handleCloseModal} />
          <ThinDivider />
          <SearchNameContainer>
            <Text>To: </Text>
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
          <ScrollScreen>
            <PeopleList peopleData={people} />
          </ScrollScreen>
        </Background>
      </Modal>
    )
  }
}
