import React, { Component } from 'react'
import { Container, Divider } from './styles'
import SearchBar from '../SearchBar'
import HometownSearchCard from '../HometownSearchCard'
import { FlatList, Modal } from 'react-native'

const exampleHometowns = [
  {
    id: 0,
    city: 'Cleveland',
    state: 'Ohio',
  },
  {
    id: 1,
    city: 'San Francisco',
    state: 'Bay Area, California',
  },
  {
    id: 2,
    city: 'Cambridge',
    state: 'Massachusetts',
  },
]

export default class HometownSearchModal extends Component {
  state = {
    searchText: '',
  }

  updateText = searchText => {
    this.setState({ searchText })
  }

  render() {
    const { visible, onPress, setText } = this.props
    return (
      <Modal animationType="slide" transparent={false} visible={visible}>
        <Container>
          <SearchBar
            updateText={this.updateText}
            searchText={this.state.searchText}
            placeholderText="Search for a city"
          />
          <Divider />
          <FlatList
            keyExtractor={hometown => hometown.id}
            data={exampleHometowns}
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
        </Container>
      </Modal>
    )
  }
}
