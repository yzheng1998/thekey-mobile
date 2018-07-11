import gql from 'graphql-tag'

// not sure if this was the best way to get the user id
export const GET_CHAT_AND_VIEWER = gql`
  query chatAndViewer($chatId: ID!) {
    viewer {
      id
    }
    chat(id: $chatId) {
      participants {
        id
      }
      messages {
        id
        sender {
          id
        }
        content
      }
    }
  }
`
