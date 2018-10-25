import gql from 'graphql-tag'

export const GET_USERS = gql`
  query users($usersFilterInput: UsersFilterInput!, $offset: Int, $limit: Int) {
    users(usersFilterInput: $usersFilterInput, offset: $offset, limit: $limit) {
      nodes {
        id
        firstName
        lastName
        demographics {
          hometown
        }
        profilePicture
      }
      totalCount
      pageInfo {
        offset
        limit
      }
    }
  }
`
