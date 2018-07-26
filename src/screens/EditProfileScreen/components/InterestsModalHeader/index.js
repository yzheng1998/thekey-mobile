import React, { Component } from 'react'
import {
  Background,
  Heading,
  ButtonContainer,
  CancelButton,
  CancelText,
  SafeView,
} from './styles'

export default class InterestsModalHeader extends Component {
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
          </ButtonContainer>
          <Heading>New Message</Heading>
        </Background>
      </SafeView>
    )
  }
}
