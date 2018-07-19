import React, { Component } from 'react'
import { Container, City, State } from './styles'

export default class HometownSearchCard extends Component {
  render() {
    const { onPress, city, state } = this.props
    return (
      <Container onPress={() => onPress({ hometown: `${city}, ${state}` })}>
        <City>{city}</City>
        <State>{state}</State>
      </Container>
    )
  }
}
