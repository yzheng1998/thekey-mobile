import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { Button, Label } from './styles'
import { Alert } from 'react-native'

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
        {(acceptFriendRequest, { error }) => {
          if (error) {
            Alert.alert(
              'Failed to accept friend request',
              'There was an error accepting your friend request. Please try again.',
              [{ text: 'OK', onPress: () => {} }],
              { cancelable: true },
            )
          }
          return (
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
          )
        }}
      </Mutation>
    )
  }
}
