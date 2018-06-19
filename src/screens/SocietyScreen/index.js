import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { View, FlatList } from 'react-native'
import { tagData, profilePicture } from '../../stories/SocietyCard'

import SocietyCard from './components/SocietyCard'

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
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor: 'rgb(250, 250, 251)',
              }}
            >
              <FlatList
                keyExtractor={user => user.id}
                showsVerticalScrollIndicator={false}
                data={data.users}
                renderItem={({ item }) => {
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
              />
            </View>
          )
        }}
      </Query>
    )
  }
}

export default SocietyScreen
