import React, { Component } from 'react'
import { Container, Title } from './styles'

export default class SettingsMenu extends Component {
  render() {
    const { title, children } = this.props
    return (
      <Container>
        <Title>{title}</Title>
        {children}
      </Container>
    )
  }
}
