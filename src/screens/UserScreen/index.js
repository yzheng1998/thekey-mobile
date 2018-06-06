import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { View, Text } from 'react-native'

const GET_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      firstName
      lastName
      email
    }
  }
`

class UserScreen extends Component {
  render() {
    return (
      <Query
        query={GET_USER}
        variables={{ id: this.props.navigation.getParam('id') }}
      >
        {({ loading, error, data }) => {
          if (loading) return 'Loading...'
          if (error) return `Error! ${error.message}`

          const { firstName, lastName, email } = data.user

          return (
            <View>
              <Text>{firstName}</Text>
              <Text>{lastName}</Text>
              <Text>{email}</Text>
            </View>
          )
        }}
      </Query>
    )
  }
}

export default UserScreen
