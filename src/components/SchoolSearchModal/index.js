import React, { Component } from 'react'
import { FlatList, Modal } from 'react-native'
import { Container, Divider } from './styles'
import SearchBar from '../SearchBar'
import SchoolSearchCard from '../SchoolSearchCard'

import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const GET_SCHOOLS = gql`
  query schools($substr: String!) {
    schools(substr: $substr) {
      id
      name
      city
      state
    }
  }
`

export default class SchoolSearchModal extends Component {
  state = {
    searchText: '',
  }

  updateText = searchText => {
    this.setState({ searchText })
  }

  render() {
    const { visible, toggleSchoolModal, toggleEducationModal } = this.props
    const variables = { substr: this.state.searchText }
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onDismiss={toggleEducationModal}
      >
        <Container>
          <SearchBar
            updateText={this.updateText}
            searchText={this.state.searchText}
            placeholderText="Search for a school"
          />
          <Divider />
          <Query query={GET_SCHOOLS} variables={variables}>
            {({ data }) => (
              <FlatList
                keyExtractor={university => university.id}
                data={data.schools}
                renderItem={({ item: university }) => (
                  <SchoolSearchCard
                    schoolId={university.id}
                    updateState={this.props.updateState}
                    navigation={this.props.navigation}
                    toggleSchoolModal={toggleSchoolModal}
                    schoolName={university.name}
                    location={`${university.city}, ${university.state}`}
                  />
                )}
              />
            )}
          </Query>
        </Container>
      </Modal>
    )
  }
}
