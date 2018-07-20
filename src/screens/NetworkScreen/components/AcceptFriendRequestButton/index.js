import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { Button, Label } from './styles'

const ACCEPT_FRIEND_REQUEST = gql`
  mutation acceptFriendRequest($id: ID!) {
    acceptFriendRequest(id: $id) {
      friendRequest {
        id
        sender {
          id
          firstName
          lastName
        }
        status
      }
    }
  }
`
export default class AcceptFriendRequestButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonText: 'Confirm',
    }
  }
  render() {
    const { friendRequestId } = this.props
    return (
      <Mutation
        mutation={ACCEPT_FRIEND_REQUEST}
        onCompleted={() => this.setState({ buttonText: 'Accepted' })}
      >
        {acceptFriendRequest => (
          <Button
            onPress={() => {
              const variables = {
                id: friendRequestId,
              }
              acceptFriendRequest({ variables })
            }}
          >
            <Label>{this.state.buttonText}</Label>
          </Button>
        )}
      </Mutation>
    )
  }
}
