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
import AddToChatButton from '../AddToChatButton'

export default class NewChatModalHeader extends Component {
  render() {
    const {
      handleClose,
      participantIds,
      createNewChat,
      newChatButtonDisabled,
      isExistingChat,
    } = this.props
    const heading = isExistingChat ? 'Add to Chat' : 'New Message'
    return (
      <SafeView>
        <Background>
          <ButtonContainer>
            <CancelButton onPress={handleClose}>
              <CancelText>Cancel</CancelText>
            </CancelButton>
            {isExistingChat ? (
              <AddToChatButton
                createNewChat={createNewChat}
                participantIds={participantIds}
                disabled={newChatButtonDisabled}
                closeModal={handleClose}
              />
            ) : (
              <CreateChatButton
                createNewChat={createNewChat}
                participantIds={participantIds}
                disabled={newChatButtonDisabled}
                closeModal={handleClose}
              />
            )}
          </ButtonContainer>
          <Heading>{heading}</Heading>
        </Background>
      </SafeView>
    )
  }
}
