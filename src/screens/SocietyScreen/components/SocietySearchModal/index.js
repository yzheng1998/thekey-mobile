import React, { Component } from 'react'
import { Modal, FlatList, StatusBar } from 'react-native'
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
import LoadingWrapper from '../../../../components/LoadingWrapper'

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

const PeopleList = ({ peopleData, viewMember }) => (
  <PeopleListContainer>
    <FlatList
      keyExtractor={person => person.id}
      data={peopleData}
      renderItem={({ item: person }) => (
        <UserCard
          onPress={() => viewMember(person.id)}
          name={`${person.firstName} ${person.lastName}`}
          picture={person.profilePicture}
          subtitle={person.demographics.hometown}
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
        <StatusBar barStyle="dark-content" />
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
              {({ loading, data }) => {
                if (loading) return <LoadingWrapper loading />
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
