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

const UserView = ({ keyExtractor, renderItem }) => (
  <Query query={GET_USERS}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...'
      if (error) return `Error! ${error.message}`
      return (
        <FlatList
          keyExtractor={keyExtractor}
          data={data.users}
          renderItem={renderItem}
        />
      )
    }}
  </Query>
)

class GetUsers extends Component {
  keyExtractor = (item, index) => index.toString()
  renderItem = ({ item }) => (
    <ListItem
      title={`${item.firstName} ${item.lastName}`}
      subtitle={item.email}
    />
  )
  render() {
    return (
      <UserView keyExtractor={this.keyExtractor} renderItem={this.renderItem} />
    )
  }
}

export default GetUsers
