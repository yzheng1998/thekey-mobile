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
    const { handleClose, participantIds, createNewChat } = this.props
    return (
      <Background>
        <ButtonContainer>
          <CancelButton onPress={handleClose}>
            <CancelText>Cancel</CancelText>
          </CancelButton>
          <CreateChatButton
            createNewChat={createNewChat}
            participantIds={participantIds}
          />
        </ButtonContainer>
        <Heading>New Message</Heading>
      </Background>
    )
  }
}
