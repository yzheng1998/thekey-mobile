import React, { Component } from 'react'
import { Content, RowContainer } from './styles'
import { Container, Title } from '../../styles'

export default class ArrayDescription extends Component {
  render() {
    const { row, title, content } = this.props
    return (
      <Container row={row}>
        <Title>{title}</Title>
        <RowContainer>
          {content.map(text => <Content key={text}>{text}</Content>)}
        </RowContainer>
      </Container>
    )
  }
}
