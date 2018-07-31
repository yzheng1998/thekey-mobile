import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { Button, Label } from './styles'
import { Alert } from 'react-native'

const SEND_FRIEND_REQUEST = gql`
  mutation createFriendRequest($recipientId: ID!, $swipedLeft: Boolean!) {
    createFriendRequest(recipientId: $recipientId, swipedLeft: $swipedLeft) {
      friendRequest {
        id
        sender {
          id
        }
        recipient {
          id
          firstName
          lastName
        }
        status
      }
    }
  }
`

const determineButtonText = (isFriend, hasFriendRequest) => {
  if (isFriend) return 'CONNECTED'
  else if (hasFriendRequest) return 'REQUEST SENT'
  return 'CONNECT'
}

export default class SendFriendRequestButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonText: 'CONNECT',
    }
  }
  render() {
    const {
      recipientId,
      swipedLeft,
      isFriend,
      hasFriendRequest,
      refreshScreen,
    } = this.props
    return (
      <Mutation
        mutation={SEND_FRIEND_REQUEST}
        onCompleted={() => refreshScreen()}
      >
        {(createFriendRequest, { error }) => {
          if (error) {
            Alert.alert(
              'Friend Request Failed to Send',
              'There was an error sending your friend request. Please try again.',
              [{ text: 'OK', onPress: () => {} }],
              { cancelable: true },
            )
          }
          return (
            <Button
              activeOpacity={0.5}
              disabled={isFriend || hasFriendRequest}
              onPress={() => {
                const variables = {
                  recipientId,
                  swipedLeft,
                }
                createFriendRequest({ variables })
              }}
            >
              <Label>{determineButtonText(isFriend, hasFriendRequest)}</Label>
            </Button>
          )
        }}
      </Mutation>
    )
  }
}
