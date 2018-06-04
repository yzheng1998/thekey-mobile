import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Text, View } from 'react-native'

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
const message = <Text>please</Text>
class GetUsers extends Component {
  render() {
    return (
      <Query query={GET_USERS}>
        {({ loading, data }) => {
          const text = JSON.stringify(data.users)
          return <Text>{text}</Text>
        }}
      </Query>
    )
  }
}

export default GetUsers
