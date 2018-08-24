import gql from 'graphql-tag'

export const GET_WAYS_TO_MEET = gql`
  query waysToMeet {
    waysToMeet {
      id
      wayToMeet
    }
  }
`

export const GET_USER = gql`
  query viewer {
    viewer {
      ... on User {
        id
        email
        firstName
        lastName
        demographics {
          hometown
        }
        tags {
          id
          name
        }
        bio
        linkedIn
        facebook
        twitter
        profilePicture
        education {
          id
          schoolType
          schoolName
          degreeType
          major
          startYear
          endYear
        }
        preferredWaysToMeet {
          id
          wayToMeet
        }
        workExperiences {
          id
          employer
          position
          startDate
          endDate
        }
        currentInitiatives {
          id
          initiative
        }
      }
    }
  }
`
