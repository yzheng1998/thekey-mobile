import React, { Component } from 'react'
import {
  Background,
  Heading,
  CancelContainer,
  CancelButton,
  CancelText,
} from './styles'

export default class SearchModalHeader extends Component {
  render() {
    const { closeModal } = this.props
    return (
      <Background>
        <CancelContainer>
          <CancelButton onPress={closeModal}>
            <CancelText>Cancel</CancelText>
          </CancelButton>
        </CancelContainer>
        <Heading>Search Users</Heading>
      </Background>
    )
  }
}
