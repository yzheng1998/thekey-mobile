import gql from 'graphql-tag'

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
        interestingFact
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
        lookingFor
        skills
        settings {
          emailPreferences
          newsLetterPreferences
        }
      }
    }
  }
`
