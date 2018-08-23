import React, { Component } from 'react'
import { FlatList, View } from 'react-native'
import { Container, Divider, SchoolModal, Text } from './styles'
import SearchBar from '../SearchBar'
import SchoolSearchCard from '../SchoolSearchCard'
import uuidv4 from 'uuid/v4'

import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import LoadingWrapper from '../LoadingWrapper'

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
    const { visible, toggleSchoolModal, onDismiss, updateState } = this.props
    const variables = { substr: this.state.searchText }
    const text =
      'Oops! Your school wasn\'t found. Press "Next" to add your own school!'
    return (
      <SchoolModal
        animationIn="slideInUp"
        animationOut="slideOutDown"
        isVisible={visible}
        onModalHide={() => {
          onDismiss()
          updateState({ closeModal: false })
        }}
      >
        <Container>
          <SearchBar
            updateText={this.updateText}
            searchText={this.state.searchText}
            autoCapitalize="words"
            placeholderText="Search for a school"
            alwaysShowCancel
            onSubmitEditing={() => {
              toggleSchoolModal()
              updateState({
                schoolName: this.state.searchText,
                location: 'Custom School',
                schoolId: uuidv4(),
              })
            }}
            closeModal={() => {
              toggleSchoolModal()
              updateState({ closeModal: true })
            }}
            returnKeyType="next"
          />
          <Divider />
          <Query query={GET_SCHOOLS} variables={variables}>
            {({ data, loading }) => {
              if (loading) return <LoadingWrapper loading />
              return (
                <View>
                  {data.schools.length > 0 ? (
                    <FlatList
                      keyboardShouldPersistTaps="handled"
                      keyExtractor={university => university.id}
                      data={data.schools}
                      renderItem={({ item: university }) => (
                        <SchoolSearchCard
                          schoolId={university.id}
                          updateState={this.props.updateState}
                          toggleSchoolModal={toggleSchoolModal}
                          schoolName={university.name}
                          location={`${university.city}, ${university.state}`}
                        />
                      )}
                    />
                  ) : (
                    <View style={{ paddingLeft: 24, paddingRight: 24 }}>
                      <Text>{text}</Text>
                    </View>
                  )}
                </View>
              )
            }}
          </Query>
        </Container>
      </SchoolModal>
    )
  }
}
