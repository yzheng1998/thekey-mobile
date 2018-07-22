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
  render() {
    const { friendRequestId, refreshPage } = this.props
    return (
      <Mutation
        mutation={REJECT_FRIEND_REQUEST}
        onCompleted={() => refreshPage()}
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
            <Label>Delete</Label>
          </Button>
        )}
      </Mutation>
    )
  }
}
