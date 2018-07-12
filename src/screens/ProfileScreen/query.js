import gql from 'graphql-tag'

export const GET_USER = gql`
  query viewer {
    viewer {
      id
      email
      firstName
      lastName
      demographics {
        hometown
      }
      tags {
        name
      }
      bio
      linkedIn
      facebook
      twitter
      profilePicture
      education {
        schoolType
        schoolName
        degreeType
        major
        startYear
        endYear
      }
      interestingFact
      preferredWaysToMeet
      workExperiences {
        id
        employer
        position
        startDate
        endDate
      }
      lookingFor
      skills
    }
  }
`
