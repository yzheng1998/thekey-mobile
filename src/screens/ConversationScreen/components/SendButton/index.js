import { ButtonContainer, SendIcon } from './styles'
import React, { Component } from 'react'
import { Alert, Keyboard } from 'react-native'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { buttonRadius } from '../../../../constants'

const SEND_MESSAGE = gql`
  mutation sendMessage($sendMessageInput: SendMessageInput!) {
    sendMessage(sendMessageInput: $sendMessageInput) {
      message {
        content
        sender {
          id
          firstName
          lastName
          profilePicture
        }
        id
      }
      error {
        message
      }
    }
  }
`

export default class SendButton extends Component {
  render() {
    // need to add better error handeling in update for if error is set
    const { clearMessage, onSendMessage, chatId, content, onPress } = this.props
    return (
      <Mutation
        mutation={SEND_MESSAGE}
        onCompleted={clearMessage}
        update={(
          cache,
          {
            data: {
              sendMessage: { message },
            },
          },
        ) => {
          onSendMessage(message)
        }}
      >
        {(sendMessage, { error }) => {
          if (error) {
            Alert.alert(
              'Message failed to send',
              'There was an error sending your message. Please try again.',
              [{ text: 'OK', onPress: () => {} }],
              { cancelable: true },
            )
          }
          return (
            <ButtonContainer
              hitSlop={buttonRadius}
              onPress={() => {
                const variables = {
                  sendMessageInput: {
                    chatId,
                    content,
                  },
                }
                if (variables.sendMessageInput.content.length > 0) {
                  sendMessage({ variables })
                  Keyboard.dismiss()
                  onPress()
                }
              }}
            >
              <SendIcon name="paper-plane" size={22} />
            </ButtonContainer>
          )
        }}
      </Mutation>
    )
  }
}
