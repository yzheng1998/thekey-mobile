import React, { Component } from 'react'
import {
  Background,
  Heading,
  ButtonContainer,
  CancelButton,
  CancelText,
  SafeView,
} from './styles'
import CreateChatButton from '../CreateChatButton'

export default class NewChatModalHeader extends Component {
  render() {
    const {
      handleClose,
      participantIds,
      createNewChat,
      newChatButtonDisabled,
    } = this.props
    return (
      <SafeView>
        <Background>
          <ButtonContainer>
            <CancelButton onPress={handleClose}>
              <CancelText>Cancel</CancelText>
            </CancelButton>
            <CreateChatButton
              createNewChat={createNewChat}
              participantIds={participantIds}
              disabled={newChatButtonDisabled}
              closeModal={handleClose}
            />
          </ButtonContainer>
          <Heading>New Message</Heading>
        </Background>
      </SafeView>
    )
  }
}
