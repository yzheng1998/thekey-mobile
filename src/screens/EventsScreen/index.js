import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'

const GET_EVENTS = gql`
  query events($startsAt: String, $location: String) {
    events(eventsFilterInput: { startsAt: $startsAt, location: $location }) {
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
class EventsScreen extends Component {
  render() {
    return (
      <Query query={GET_EVENTS}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...'
          if (error) return `Error! ${error.message}`
          return (
            <FlatList
              keyExtractor={event => event.id}
              data={data.events}
              renderItem={({ item }) => (
                <ListItem
                  title={`${item.title} on ${item.startsAt}`}
                  subtitle={item.location}
                  onPress={() =>
                    this.props.navigation.navigate('Event', {
                      id: item.id,
                    })
                  }
                />
              )}
            />
          )
        }}
      </Query>
    )
  }
}

export default EventsScreen
