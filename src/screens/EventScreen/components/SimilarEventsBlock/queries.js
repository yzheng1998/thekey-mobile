import gql from 'graphql-tag'

export const GET_SIMILAR_EVENTS = gql`
  query similarEvents($id: ID!, $offset: Int, $limit: Int) {
    similarEvents(id: $id, offset: $offset, limit: $limit) {
      nodes {
        id
        location
        dateRange
        title
        picture
        details
        link
        price
        tags {
          name
        }
        isInterested
        interestedFriends {
          id
          firstName
          lastName
          profilePicture
        }
      }
      totalCount
      pageInfo {
        offset
        limit
      }
    }
  }
`
