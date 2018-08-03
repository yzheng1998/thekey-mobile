import React, { Component } from 'react'
import { ErrorMessage, Container } from './styles'

export default class Error extends Component {
  render() {
    const { error } = this.props
    return (
      <Container>
        <ErrorMessage>{error || ' '}</ErrorMessage>
      </Container>
    )
  }
}
