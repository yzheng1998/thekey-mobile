import React, { Component } from 'react'
import {
  ModalContainer,
  MatchScreen,
  GraphicContainer,
  Avatar,
  Title,
  Subtitle,
  InfoContainer,
  ButtonView,
} from '../../styles'
import Button from './components/Button'
import StartChatButton from './components/StartChatButton'

export default class MatchModal extends Component {
  render() {
    const {
      matchName,
      isVisible,
      toggleMatchModal,
      recipientProfilePicture,
      senderProfilePicture,
      senderId,
      createNewChat,
    } = this.props
    return (
      <ModalContainer
        animationIn="slideInUp"
        animationOut="slideOutDown"
        isVisible={isVisible}
      >
        <MatchScreen>
          <InfoContainer>
            <GraphicContainer>
              <Avatar source={{ uri: recipientProfilePicture }} />
              <Avatar source={{ uri: senderProfilePicture }} />
            </GraphicContainer>
            <Title>Awesome news!</Title>
            <Subtitle>You and {matchName} are now connected!</Subtitle>
          </InfoContainer>
          <ButtonView>
            <StartChatButton
              createNewChat={createNewChat}
              senderId={senderId}
            />
            <Button onPress={toggleMatchModal} buttonText="KEEP SWIPING" />
          </ButtonView>
        </MatchScreen>
      </ModalContainer>
    )
  }
}
