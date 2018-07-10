import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { ButtonContainer, SendIcon } from './styles'

const SEND_MESSAGE = gql`
  mutation sendMessage($sendMessageInput: SendMessageInput!) {
    sendMessage(sendMessageInput: $sendMessageInput) {
      message {
        content
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
    return (
      <Mutation mutation={SEND_MESSAGE} onCompleted={this.props.clearMessage}>
        {sendMessage => (
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
        )}
      </Mutation>
    )
  }
}
