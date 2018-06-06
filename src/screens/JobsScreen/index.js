import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'

const GET_JOBS = gql`
  query jobs {
    jobs {
      id
      title
      description
      picture
      experience
      location
    }
  }
`

class JobsScreen extends Component {
  render() {
    return (
      <Query query={GET_JOBS}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...'
          if (error) return `Error! ${error.message}`
          return (
            <FlatList
              keyExtractor={job => job.id}
              data={data.jobs}
              renderItem={({ item }) => (
                <ListItem
                  title={`${item.title}`}
                  subtitle={item.experience}
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

export default JobsScreen
