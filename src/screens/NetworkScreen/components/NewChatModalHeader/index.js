import React, { Component } from 'react'
import {
  Background,
  Heading,
  CancelContainer,
  CancelButton,
  CancelText,
} from './styles'

export default class NewChatModalHeader extends Component {
  render() {
    const { handleClose } = this.props
    return (
      <Background>
        <CancelContainer>
          <CancelButton onPress={handleClose}>
            <CancelText>Cancel</CancelText>
          </CancelButton>
        </CancelContainer>
        <Heading>New Message</Heading>
      </Background>
    )
  }
}
