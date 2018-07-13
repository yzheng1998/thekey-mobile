import React, { Component } from 'react'
import { Modal, FlatList, Platform } from 'react-native'
import {
  Background,
  ScrollScreen,
  SearchNameContainer,
  PeopleListContainer,
  Text,
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
  },
  {
    id: '2',
    firstName: 'Diego',
    lastName: 'Covarrubias',
    profilePicture:
      'https://images.unsplash.com/photo-1531397776155-cf6b2831601b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ee628aa941c5a8f1d3bacc05987fb21b&auto=format&fit=crop&w=668&q=80',
  },
  {
    id: '3',
    firstName: 'Shahd',
    lastName: 'Nara',
    profilePicture:
      'https://images.unsplash.com/photo-1531397776155-cf6b2831601b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ee628aa941c5a8f1d3bacc05987fb21b&auto=format&fit=crop&w=668&q=80',
  },
  {
    id: '4',
    firstName: 'Yuke',
    lastName: 'Zheng',
    profilePicture:
      'https://images.unsplash.com/photo-1531397776155-cf6b2831601b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ee628aa941c5a8f1d3bacc05987fb21b&auto=format&fit=crop&w=668&q=80',
  },
  {
    id: '5',
    firstName: 'Bliss',
    lastName: 'Perry',
    profilePicture:
      'https://images.unsplash.com/photo-1531397776155-cf6b2831601b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ee628aa941c5a8f1d3bacc05987fb21b&auto=format&fit=crop&w=668&q=80',
  },
]

export default class NewChatModal extends Component {
  static navigationOptions = {
    header: 'New Conversation',
  }
  state = {
    text: '',
    users: [],
  }

  onChangeTags = () => {
    if (this.state.text !== '')
      this.setState({ users: [...this.state.users, this.state.text] })
  }

  onChangeText = text => {
    this.setState({ text }, () => {
      console.log('AFTER SETTING TEXT', this.state)
    })
    const lastTyped = text.charAt(text.length - 1)
    const parseWhen = [',', ' ', ';', '\n']
    if (parseWhen.indexOf(lastTyped) > -1) {
      this.setState(
        {
          users: [...this.state.users, this.state.text],
          text: '',
        },
        () => {
          console.log('AFTER SETTING TAGS IN PARSED', this.state)
        },
      )
    }
    console.log('TAG LIST', this.state.users)
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible })
  }
  updateUsers = () => {
    // this.setState({ users: [...this.state.users, user] })
    // this.setState({ users }, () => {
    //   console.log('AFTER UPDATEUSERS', this.state)
    // })
  }
  labelExtractor = user => user

  renderUserCards = peopleData => (
    <PeopleListContainer>
      <FlatList
        styles={{ backgroundColor: 'red', flex: 1 }}
        keyExtractor={person => person.id}
        data={peopleData}
        renderItem={({ item: person }) => (
          <UserCard
            name={`${person.firstName} ${person.lastName}`}
            picture={person.profilePicture}
          />
        )}
      />
    </PeopleListContainer>
  )

  render() {
    const inputProps = {
      keyboardType: 'default',
      placeholder: 'email',
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
          <SearchNameContainer>
            <Text>To: </Text>
            <TagInput
              value={this.state.users}
              onChange={() => null}
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
          <ScrollScreen>{this.renderUserCards(people)}</ScrollScreen>
        </Background>
      </Modal>
    )
  }
}
