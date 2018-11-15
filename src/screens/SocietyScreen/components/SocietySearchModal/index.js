import React, { Component } from 'react'
import { FlatList, StatusBar } from 'react-native'
import {
  Background,
  PeopleListContainer,
  ThinDivider,
  SearchModal,
} from './styles'
import UserCard from '../../../../components/UserCard'
import SearchModalHeader from '../SearchModalHeader'
import SearchBar from '../../../../components/SearchBar'
import { Query } from 'react-apollo'
import LoadingWrapper from '../../../../components/LoadingWrapper'
import { GET_USERS } from './queries'
import { societySearchLimit } from '../../../../../config'

const defaultProfilePicture =
  'https://images.unsplash.com/photo-1519145897500-869c40ccb024?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dc363c8e033813d4f7b798846bb13a24&auto=format&fit=crop&w=582&q=80'

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
          picture={person.profilePicture || defaultProfilePicture}
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
    const variables = {
      usersFilterInput: { name: this.state.searchText },
      limit: societySearchLimit,
      offset: 0,
    }
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
          <Query query={GET_USERS} variables={variables}>
            {({ loading, data, fetchMore }) => {
              if (loading || !data.users) return <LoadingWrapper loading />

              return (
                <PeopleList
                  variables={variables}
                  fetchMore={fetchMore}
                  onPress={closeSearchModal}
                  updateState={obj => this.setState(obj)}
                  peopleData={data.users.nodes}
                  addParticipant={this.addParticipant}
                />
              )
            }}
          </Query>
        </Background>
      </SearchModal>
    )
  }
}
