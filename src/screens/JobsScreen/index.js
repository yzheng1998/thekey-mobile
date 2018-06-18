import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { FlatList, Text } from 'react-native'
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
          if (loading) return <Text>Loading...</Text>
          if (error) return <Text>Error! {error.message}</Text>
          return (
            <FlatList
              keyExtractor={job => job.id}
              data={data.jobs}
              renderItem={({ item }) => (
                <ListItem
                  title={`${item.title}`}
                  subtitle={item.experience}
                  onPress={() =>
                    this.props.navigation.navigate('Job', {
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
