import React, { Component } from 'react'
import Button from '../Button'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
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

export default class StartChatButton extends Component {
  render() {
    const { senderId, createNewChat } = this.props
    return (
      <Mutation
        mutation={CREATE_CHAT}
        onCompleted={data => createNewChat(data.createChat.chat)}
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
              onPress={() => {
                const variables = {
                  participantIds: [senderId],
                }
                createChat({ variables })
              }}
              buttonText="SEND MESSAGE"
            />
          )
        }}
      </Mutation>
    )
  }
}
