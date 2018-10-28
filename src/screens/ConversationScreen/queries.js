import gql from 'graphql-tag'

export const GET_CHAT_AND_VIEWER = gql`
  query chatAndViewer($chatId: ID!, $offset: Int, $limit: Int) {
    viewer {
      ... on User {
        id
        firstName
        lastName
        profilePicture
      }
    }
    chat(id: $chatId) {
      participants {
        id
        firstName
        lastName
        profilePicture
      }
      messages(offset: $offset, limit: $limit) {
        nodes {
          id
          sender {
            id
            firstName
            lastName
            profilePicture
          }
          content
        }
        pageInfo {
          offset
          limit
        }
        totalCount
      }
    }
  }
`
