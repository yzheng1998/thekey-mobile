import gql from 'graphql-tag'

export const GET_EVENTS = gql`
  query events(
    $eventsFilterInput: EventsFilterInput!
    $offset: Int
    $limit: Int
  ) {
    events(
      eventsFilterInput: $eventsFilterInput
      offset: $offset
      limit: $limit
    ) {
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
        interestedFriends {
          id
          firstName
          lastName
          profilePicture
        }
        company {
          id
        }
        isInterested
      }
      totalCount
      pageInfo {
        offset
        limit
      }
    }
  }
`

export const GET_SUGGESTED_EVENTS = gql`
  query suggestedEvents($offset: Int, $limit: Int) {
    suggestedEvents(offset: $offset, limit: $limit) {
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
        interestedFriends {
          id
          firstName
          lastName
          profilePicture
        }
        company {
          id
        }
        isInterested
      }
      totalCount
      pageInfo {
        offset
        limit
      }
    }
  }
`
