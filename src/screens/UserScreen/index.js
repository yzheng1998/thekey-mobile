import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { View, Text, FlatList } from 'react-native'
import { ListItem, Button } from 'react-native-elements'
import LoadingWrapper from '../../components/LoadingWrapper'

const GET_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      firstName
      lastName
      email
      friends {
        id
        firstName
        lastName
      }
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
        {({ loading, data }) => {
          if (loading) return <LoadingWrapper loading />
          const { firstName, lastName, email } = data.user

          return (
            <View>
              <Text>{firstName}</Text>
              <Text>{lastName}</Text>
              <Text>{email}</Text>
              <Button
                title="View Friend Requests"
                onPress={() => this.props.navigation.navigate('FriendRequests')}
              />
              <FlatList
                horizontal
                keyExtractor={user => user.id}
                data={data.user.friends}
                renderItem={({ item: friend }) => (
                  <ListItem
                    title={`${friend.firstName} ${friend.lastName}`}
                    subtitle={friend.id}
                    onPress={() =>
                      this.props.navigation.navigate('User', {
                        id: friend.id,
                      })
                    }
                  />
                )}
              />
            </View>
          )
        }}
      </Query>
    )
  }
}

export default UserScreen
