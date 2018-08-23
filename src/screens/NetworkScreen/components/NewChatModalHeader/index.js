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
import { buttonRadius } from '../../../../constants'

export default class NewChatModalHeader extends Component {
  render() {
    const {
      handleClose,
      participantIds,
      createNewChat,
      newChatButtonDisabled,
      isExistingChat,
      chatId,
    } = this.props
    const heading = isExistingChat ? 'Add to Chat' : 'New Message'
    return (
      <SafeView>
        <Background>
          <ButtonContainer>
            <CancelButton hitSlop={buttonRadius} onPress={handleClose}>
              <CancelText>Cancel</CancelText>
            </CancelButton>
            <Heading>{heading}</Heading>
            {isExistingChat ? (
              <AddToChatButton
                navigateToChat={createNewChat}
                participantIds={participantIds}
                disabled={newChatButtonDisabled}
                closeModal={handleClose}
                chatId={chatId}
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
        </Background>
      </SafeView>
    )
  }
}
