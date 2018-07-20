import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { Button, Label } from './styles'

const REJECT_FRIEND_REQUEST = gql`
  mutation rejectFriendRequest($id: ID!) {
    rejectFriendRequest(id: $id) {
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
export default class RejectFriendRequestButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonText: 'Delete',
    }
  }
  render() {
    const { friendRequestId } = this.props
    return (
      <Mutation
        mutation={REJECT_FRIEND_REQUEST}
        onCompleted={() => this.setState({ buttonText: 'Deleted' })}
      >
        {rejectFriendRequest => (
          <Button
            onPress={() => {
              const variables = {
                id: friendRequestId,
              }
              rejectFriendRequest({ variables })
            }}
          >
            <Label>{this.state.buttonText}</Label>
          </Button>
        )}
      </Mutation>
    )
  }
}
