import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { Button, Label } from './styles'

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

export default class SendFriendRequestButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonText: 'CONNECT',
    }
  }
  render() {
    const { recipientId, swipedLeft } = this.props
    return (
      <Mutation
        mutation={SEND_FRIEND_REQUEST}
        onCompleted={() => this.setState({ buttonText: 'REQUEST SENT' })}
      >
        {createFriendRequest => (
          <Button
            activeOpacity={0.5}
            onPress={() => {
              const variables = {
                recipientId,
                swipedLeft,
              }
              createFriendRequest({ variables })
            }}
          >
            <Label>{this.state.buttonText}</Label>
          </Button>
        )}
      </Mutation>
    )
  }
}
