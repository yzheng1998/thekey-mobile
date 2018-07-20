import React, { Component } from 'react'
import {
  Background,
  Heading,
  ButtonContainer,
  CancelButton,
  CancelText,
} from './styles'
import CreateChatButton from '../CreateChatButton'

export default class NewChatModalHeader extends Component {
  render() {
    const { handleClose } = this.props
    return (
      <Background>
        <ButtonContainer>
          <CancelButton onPress={handleClose}>
            <CancelText>Cancel</CancelText>
          </CancelButton>
          <CreateChatButton onPress={handleClose} />
        </ButtonContainer>
        <Heading>New Message</Heading>
      </Background>
    )
  }
}
