import React, { Component } from 'react'
import { Content } from './styles'
import { Container, Title } from '../../styles'

export default class Description extends Component {
  render() {
    const { row, title, content } = this.props
    return (
      <Container row={row}>
        <Title>{title}</Title>
        <Content numberOfLines={1}>{content}</Content>
      </Container>
    )
  }
}
