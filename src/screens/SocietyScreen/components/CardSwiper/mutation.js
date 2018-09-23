import gql from 'graphql-tag'

export const SEND_FRIEND_REQUEST = gql`
  mutation createFriendRequest($recipientId: ID!, $swipedLeft: Boolean!) {
    createFriendRequest(recipientId: $recipientId, swipedLeft: $swipedLeft) {
      friendRequest {
        id
        recipient {
          id
          profilePicture
        }
        sender {
          id
          firstName
          lastName
          profilePicture
        }
        status
      }
      error {
        message
      }
    }
  }
`
