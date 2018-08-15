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
      currentInitiatives {
        id
        initiative
      }
      skills
      friends {
        id
        firstName
        lastName
        profilePicture
      }
      mutualFriends {
        id
        firstName
        lastName
        profilePicture
      }
      eventsInCommon {
        id
        title
        dateRange
        interestedFriends {
          id
          firstName
          lastName
          profilePicture
        }
        isInterested
      }
      isFriend
      hasFriendRequest
    }
  }
`
