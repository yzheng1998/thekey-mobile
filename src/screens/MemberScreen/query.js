import gql from 'graphql-tag'

export const GET_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
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
      friends {
        id
        firstName
        lastName
        profilePicture
      }
    }
  }
`
