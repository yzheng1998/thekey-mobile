import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { tagData, profilePicture } from '../../stories/SocietyCard'

import SocietyCard from './components/SocietyCard'

import { SwiperContainer } from './styles'

import Swiper from 'react-native-deck-swiper'

const GET_USERS = gql`
  query users {
    users {
      id
      firstName
      lastName
      email
      friends {
        id
        profilePicture
      }
    }
  }
`

class SocietyScreen extends Component {
  render() {
    return (
      <Query query={GET_USERS}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...'
          if (error) return `Error! ${error.message}`
          return (
            <SwiperContainer>
              <Swiper
                cards={data.users}
                renderCard={item => {
                  const renderUser = {
                    firstName: item.firstName,
                    lastName: item.lastName,
                    email: item.email,
                    mutualFriends: item.friends,
                    state: 'Cleveland',
                    hometown: 'Ohio',
                    bio:
                      'A Harvard undergraduate student looking for a impactful and fufilling career',
                    profilePicture,
                    tags: tagData,
                  }
                  return <SocietyCard user={renderUser} />
                }}
                backgroundColor="white"
                verticalSwipe={false}
                stackSize={3}
                cardVerticalMargin={10}
              />
            </SwiperContainer>
          )
        }}
      </Query>
    )
  }
}

export default SocietyScreen
