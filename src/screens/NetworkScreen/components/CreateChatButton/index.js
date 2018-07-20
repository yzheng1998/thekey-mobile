import React, { Component } from 'react'
import { Button, Text } from './styles'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

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
    const { participantIds, createNewChat, disabled } = this.props
    return (
      <Mutation
        mutation={CREATE_CHAT}
        onCompleted={data => {
          createNewChat(data.createChat.chat)
        }}
      >
        {createChat => (
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
        )}
      </Mutation>
    )
  }
}
