import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'

const GET_USERS = gql`
  query users {
    users {
      id
      firstName
      lastName
      email
    }
  }
`

class UsersScreen extends Component {
  render() {
    return (
      <Query query={GET_USERS}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...'
          if (error) return `Error! ${error.message}`
          return (
            <FlatList
              keyExtractor={user => user.id}
              data={data.users}
              renderItem={({ item }) => (
                <ListItem
                  title={`${item.firstName} ${item.lastName}`}
                  subtitle={item.email}
                />
              )}
            />
          )
        }}
      </Query>
    )
  }
}

export default UsersScreen
