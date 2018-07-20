import React, { Component } from 'react'
import { Modal, FlatList, Text } from 'react-native'
import {
  Background,
  ScrollScreen,
  PeopleListContainer,
  ThinDivider,
} from './styles'
import UserCard from '../../../../components/UserCard'
import SearchModalHeader from '../SearchModalHeader'
import SearchBar from '../../../../components/SearchBar'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const GET_USERS = gql`
  query users($usersFilterInput: UsersFilterInput!) {
    users(usersFilterInput: $usersFilterInput) {
      id
      firstName
      lastName
      demographics {
        hometown
      }
      profilePicture
    }
  }
`

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
    const variables = { usersFilterInput: { name: this.state.searchText } }
    const { closeModal, navigation, ...rest } = this.props
    const viewMember = memberId => {
      navigation.navigate('Member', {
        id: memberId,
      })
      closeModal()
    }
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
            <Query query={GET_USERS} variables={variables}>
              {({ loading, error, data }) => {
                if (loading) return <Text>Loading...</Text>
                if (error) {
                  return <Text>Error! {error.message}</Text>
                }
                return (
                  <PeopleList
                    viewMember={viewMember}
                    peopleData={data.users}
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
