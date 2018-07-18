import React, { Component } from 'react'
import { Container, City, State } from './styles'

export default class HometownSearchCard extends Component {
  state = {
    searchText: '',
  }

  updateText = searchText => {
    this.setState({ searchText })
  }

  render() {
    const { setText, onPress, city, state } = this.props
    return (
      <Container
        onPress={() => {
          onPress()
          setText({ hometown: `${city}, ${state}` })
        }}
      >
        <City>{city}</City>
        <State>{state}</State>
      </Container>
    )
  }
}
