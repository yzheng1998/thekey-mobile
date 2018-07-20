import React, { Component } from 'react'
import { Modal, FlatList } from 'react-native'
import {
  Background,
  ScrollScreen,
  PeopleListContainer,
  ThinDivider,
} from './styles'
import UserCard from '../../../../components/UserCard'
import SearchModalHeader from '../SearchModalHeader'
import SearchBar from '../../../../components/SearchBar'

const people = [
  {
    id: '1',
    firstName: 'Michele',
    lastName: 'Wang',
    profilePicture:
      'https://images.unsplash.com/photo-1531397776155-cf6b2831601b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ee628aa941c5a8f1d3bacc05987fb21b&auto=format&fit=crop&w=668&q=80',
    hometown: 'Fairfax, Virginia',
  },
  {
    id: '2',
    firstName: 'Diego',
    lastName: 'Covarrubias',
    profilePicture:
      'https://images.unsplash.com/photo-1531397776155-cf6b2831601b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ee628aa941c5a8f1d3bacc05987fb21b&auto=format&fit=crop&w=668&q=80',
    hometown: 'Marysville, Ohio',
  },
  {
    id: '3',
    firstName: 'Shahd',
    lastName: 'Nara',
    profilePicture:
      'https://images.unsplash.com/photo-1531397776155-cf6b2831601b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ee628aa941c5a8f1d3bacc05987fb21b&auto=format&fit=crop&w=668&q=80',
    hometown: 'Nazareth, Israel',
  },
  {
    id: '4',
    firstName: 'Yuke',
    lastName: 'Zheng',
    profilePicture:
      'https://images.unsplash.com/photo-1531397776155-cf6b2831601b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ee628aa941c5a8f1d3bacc05987fb21b&auto=format&fit=crop&w=668&q=80',
    hometown: 'Cleveland, Ohio',
  },
  {
    id: '5',
    firstName: 'Bliss',
    lastName: 'Perry',
    profilePicture:
      'https://images.unsplash.com/photo-1531397776155-cf6b2831601b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ee628aa941c5a8f1d3bacc05987fb21b&auto=format&fit=crop&w=668&q=80',
    hometown: 'New York, New York',
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
          subtitle={person.hometown}
        />
      )}
    />
  </PeopleListContainer>
)
export default class SocietySearchModal extends Component {
  static navigationOptions = {
    header: 'Search the Society',
  }

  state = {
    searchText: '',
  }

  updateText = searchText => {
    this.setState({ searchText })
  }

  render() {
    const { closeModal, ...rest } = this.props
    const closeSearchModal = () => {
      this.setState({
        searchText: '',
      })
      closeModal()
    }
    return (
      <Modal animationType="slide" {...rest}>
        <Background>
          <SearchModalHeader closeModal={closeSearchModal} />
          <SearchBar
            updateText={this.updateText}
            searchText={this.state.searchText}
            placeholderText="Search for a user"
          />
          <ThinDivider />
          <ScrollScreen>
            <PeopleList peopleData={people} />
          </ScrollScreen>
        </Background>
      </Modal>
    )
  }
}
