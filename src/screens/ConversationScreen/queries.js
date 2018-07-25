import gql from 'graphql-tag'

export const GET_CHAT_AND_VIEWER = gql`
  query chatAndViewer($chatId: ID!) {
    viewer {
      id
      firstName
      lastName
      profilePicture
    }
    chat(id: $chatId) {
      participants {
        id
        firstName
        lastName
        profilePicture
      }
      messages {
        id
        sender {
          id
          firstName
          lastName
          profilePicture
        }
        content
      }
    }
  }
`
