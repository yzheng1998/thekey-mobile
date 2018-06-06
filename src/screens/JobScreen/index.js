import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { View, Text } from 'react-native'

const GET_JOB = gql`
  query job($id: ID!) {
    job(id: $id) {
      id
      title
      description
      picture
      experience
      location
    }
  }
`

class JobScreen extends Component {
  render() {
    return (
      <Query
        query={GET_JOB}
        variables={{ id: this.props.navigation.getParam('id') }}
      >
        {({ loading, error, data }) => {
          if (loading) return 'Loading...'
          if (error) return `Error! ${error.message}`

          const { title, description, picture, experience, location } = data.job

          return (
            <View>
              <Text>{title}</Text>
              <Text>{description}</Text>
              <Text>{picture}</Text>
              <Text>{experience}</Text>
              <Text>{location}</Text>
            </View>
          )
        }}
      </Query>
    )
  }
}

export default JobScreen
