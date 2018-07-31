import { ButtonContainer, SendIcon } from './styles'
import React, { Component } from 'react'
import { Alert } from 'react-native'
import { GET_CHAT_AND_VIEWER } from '../../queries'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

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
    return (
      <Mutation
        mutation={SEND_MESSAGE}
        onCompleted={this.props.clearMessage}
        update={(
          cache,
          {
            data: {
              sendMessage: { message },
            },
          },
        ) => {
          const oldQuery = cache.readQuery({
            query: GET_CHAT_AND_VIEWER,
            variables: { chatId: this.props.chatId },
          })
          const newQuery = {
            ...oldQuery,
            chat: {
              ...oldQuery.chat,
              messages: [message, ...oldQuery.chat.messages],
            },
          }
          cache.writeQuery({
            query: GET_CHAT_AND_VIEWER,
            data: newQuery,
            variables: { chatId: this.props.chatId },
          })
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
              onPress={() => {
                const variables = {
                  sendMessageInput: {
                    chatId: this.props.chatId,
                    content: this.props.content,
                  },
                }
                if (variables.sendMessageInput.content.length > 0) {
                  sendMessage({ variables })
                  this.props.onPress()
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
