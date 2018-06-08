import gql from 'graphql-tag'

export const ACCEPT_FRIEND_REQUEST = gql`
  mutation AcceptFriendRequest($id: ID!) {
    acceptFriendRequest(id: $id) {
      friendRequest {
        status
      }
      sender {
        id
        firstName
        lastName
      }
    }
  }
`
export const REJECT_FRIEND_REQUEST = gql`
  mutation RejectFriendRequest($id: ID!) {
    rejectFriendRequest(id: $id) {
      friendRequest {
        status
      }
      sender {
        id
        firstName
        lastName
      }
    }
  }
`
