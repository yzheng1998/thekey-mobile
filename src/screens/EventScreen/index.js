import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { View, Text } from 'react-native'

const GET_EVENT = gql`
  query event($id: ID!) {
    event(id: $id) {
      id
      location
      startsAt
      endsAt
      title
      picture
      details
    }
  }
`

class EventScreen extends Component {
  render() {
    return (
      <Query
        query={GET_EVENT}
        variables={{ id: this.props.navigation.getParam('id') }}
      >
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading...</Text>
          if (error) return <Text>Error! ${error.message}</Text>

          const {
            location,
            startsAt,
            endsAt,
            title,
            picture,
            details,
          } = data.event
          return (
            <View>
              <Text>{location}</Text>
              <Text>{startsAt}</Text>
              <Text>{endsAt}</Text>
              <Text>{title}</Text>
              <Text>{picture}</Text>
              <Text>{details}</Text>
            </View>
          )
        }}
      </Query>
    )
  }
}

export default EventScreen
