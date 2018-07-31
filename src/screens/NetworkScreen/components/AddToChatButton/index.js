import React, { Component } from 'react'
import { Button, Text } from './styles'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const ADD_TO_CHAT = gql`
  mutation addToChat($chatId: ID!, $participantIds: [ID!]!) {
    addToChat(chatId: $chatId, participantIds: $participantIds) {
      updatedChat {
        id
        participants {
          firstName
          id
        }
      }
      error {
        message
      }
    }
  }
`

export default class AddToChatButton extends Component {
  render() {
    const {
      participantIds,
      chatId,
      navigateToChat,
      disabled,
      closeModal,
    } = this.props
    return (
      <Mutation
        mutation={ADD_TO_CHAT}
        onCompleted={data => {
          console.log('data', data)
          navigateToChat(data.addToChat.updatedChat)
          closeModal()
        }}
      >
        {createChat => (
          <Button
            disabled={disabled}
            onPress={() => {
              const variables = {
                chatId,
                participantIds,
              }
              console.log('variables', variables)
              createChat({ variables })
            }}
          >
            <Text disabled={disabled}>Add</Text>
          </Button>
        )}
      </Mutation>
    )
  }
}
