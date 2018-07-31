import React, { Component } from 'react'
import { Button, Text } from './styles'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { Alert } from 'react-native'

const CREATE_CHAT = gql`
  mutation createChat($participantIds: [ID!]!) {
    createChat(participantIds: $participantIds) {
      chat {
        id
        participants {
          firstName
          id
        }
      }
    }
  }
`

export default class CreateChatButton extends Component {
  render() {
    const { participantIds, createNewChat, disabled, closeModal } = this.props
    return (
      <Mutation
        mutation={CREATE_CHAT}
        onCompleted={data => {
          createNewChat(data.createChat.chat)
          closeModal()
        }}
      >
        {(createChat, { error }) => {
          if (error) {
            Alert.alert(
              'Failed to create chat',
              'There was an error starting a new chat. Please try again.',
              [{ text: 'OK', onPress: () => {} }],
              { cancelable: true },
            )
          }
          return (
            <Button
              disabled={disabled}
              onPress={() => {
                const variables = {
                  participantIds,
                }
                createChat({ variables })
              }}
            >
              <Text disabled={disabled}>Next</Text>
            </Button>
          )
        }}
      </Mutation>
    )
  }
}
