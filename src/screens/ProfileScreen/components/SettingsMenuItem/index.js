import React, { Component } from 'react'
import { Container, Title } from './styles'

export default class SettingsMenu extends Component {
  render() {
    const { title, children, ...rest } = this.props
    return (
      <Container {...rest}>
        <Title>{title}</Title>
        {children}
      </Container>
    )
  }
}
