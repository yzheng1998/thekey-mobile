import gql from 'graphql-tag'

export const GET_EVENTS = gql`
  query events($eventsFilterInput: EventsFilterInput!) {
    events(eventsFilterInput: $eventsFilterInput) {
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
  }
`

export const GET_SUGGESTED_EVENTS = gql`
  query suggestedEvents {
    suggestedEvents {
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
  }
`
