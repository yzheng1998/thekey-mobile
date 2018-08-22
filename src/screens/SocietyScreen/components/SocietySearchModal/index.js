import React, { Component } from 'react'
import { FlatList, StatusBar } from 'react-native'
import {
  Background,
  ScrollScreen,
  PeopleListContainer,
  ThinDivider,
  SearchModal,
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

const PeopleList = ({ peopleData, onPress, updateState }) => (
  <PeopleListContainer>
    <FlatList
      keyboardShouldPersistTaps="handled"
      keyExtractor={person => person.id}
      data={peopleData}
      renderItem={({ item: person }) => (
        <UserCard
          onPress={() => {
            onPress()
            updateState({ id: person.id })
          }}
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
    id: '',
  }

  updateText = searchText => {
    this.setState({ searchText })
  }

  render() {
    const variables = { usersFilterInput: { name: this.state.searchText } }
    const { closeModal, navigation, isVisible } = this.props

    const closeSearchModal = () => {
      this.setState({
        searchText: '',
        id: '',
      })
      closeModal()
    }
    const viewMember = memberId => {
      closeModal()
      navigation.navigate('Member', {
        id: memberId,
      })
    }
    return (
      <SearchModal
        animationIn="slideInUp"
        animationOut="slideOutDown"
        isVisible={isVisible}
        onModalHide={
          this.state.id.length > 0
            ? () => viewMember(this.state.id)
            : () => closeSearchModal()
        }
      >
        <StatusBar barStyle="dark-content" />
        <Background>
          <SearchModalHeader closeModal={closeSearchModal} />
          <SearchBar
            updateText={this.updateText}
            searchText={this.state.searchText}
            placeholderText="Search for a user"
          />
          <ThinDivider />
          <ScrollScreen keyboardShouldPersistTaps="handled">
            <Query query={GET_USERS} variables={variables}>
              {({ loading, data }) => {
                if (loading) return <LoadingWrapper loading />
                return (
                  <PeopleList
                    onPress={closeSearchModal}
                    updateState={obj => this.setState(obj)}
                    peopleData={data.users}
                    addParticipant={this.addParticipant}
                  />
                )
              }}
            </Query>
          </ScrollScreen>
        </Background>
      </SearchModal>
    )
  }
}
