import gql from 'graphql-tag'

export const GET_CHATS = gql`
  query viewerWithChats(
    $chatsFilterInput: ChatsFilterInput!
    $offset: Int
    $limit: Int
  ) {
    viewer {
      ... on User {
        id
        firstName
        lastName
        profilePicture
        email
        chats(
          chatsFilterInput: $chatsFilterInput
          offset: $offset
          limit: $limit
        ) {
          nodes {
            id
            participants {
              id
              firstName
              lastName
              profilePicture
            }
            messages(offset: 0, limit: 1) {
              nodes {
                id
                sender {
                  id
                  firstName
                  lastName
                }
                content
                createdAt
              }
              pageInfo {
                offset
                limit
              }
            }
          }
          pageInfo {
            offset
            limit
          }
        }
      }
    }
  }
`
