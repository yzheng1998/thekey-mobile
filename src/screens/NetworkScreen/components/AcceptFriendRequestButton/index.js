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
  render() {
    const { friendRequestId, refreshPage } = this.props
    return (
      <Mutation
        mutation={ACCEPT_FRIEND_REQUEST}
        onCompleted={() => refreshPage()}
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
            <Label>Confirm</Label>
          </Button>
        )}
      </Mutation>
    )
  }
}
