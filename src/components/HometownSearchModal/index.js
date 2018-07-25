import React, { Component } from 'react'
import { Container, Divider } from './styles'
import SearchBar from '../SearchBar'
import HometownSearchCard from '../HometownSearchCard'
import { FlatList, Modal } from 'react-native'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const GET_HOMETOWNS = gql`
  query hometowns($substr: String!) {
    hometowns(substr: $substr) {
      id
      city
      state
    }
  }
`

export default class HometownSearchModal extends Component {
  state = {
    searchText: '',
  }

  updateText = searchText => {
    this.setState({ searchText })
  }

  render() {
    const { visible, onPress, setText } = this.props
    const variables = { substr: this.state.searchText }
    return (
      <Modal animationType="slide" transparent={false} visible={visible}>
        <Container>
          <SearchBar
            closeModal={onPress}
            updateText={this.updateText}
            searchText={this.state.searchText}
            placeholderText="Search for a city"
          />
          <Divider />
          <Query query={GET_HOMETOWNS} variables={variables}>
            {({ data }) => (
              <FlatList
                keyExtractor={hometown => hometown.id}
                data={data.hometowns}
                renderItem={({ item: hometown }) => (
                  <HometownSearchCard
                    onPress={obj => {
                      onPress()
                      setText(obj)
                    }}
                    city={hometown.city}
                    state={hometown.state}
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
