import React, { Component } from 'react'
import {
  Container,
  CancelButton,
  RowContainer,
  CancelText,
  Title,
} from './styles'

export default class CancelHeader extends Component {
  render() {
    const { onCancel, title } = this.props
    return (
      <Container>
        <RowContainer>
          <CancelButton onPress={onCancel}>
            <CancelText>Cancel</CancelText>
          </CancelButton>
          <Title>{title}</Title>
        </RowContainer>
      </Container>
    )
  }
}
