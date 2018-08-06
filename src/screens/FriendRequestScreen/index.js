import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { FlatList } from 'react-native'
import FriendRequestListItem from './FriendRequestListItem'
import LoadingWrapper from '../../components/LoadingWrapper'

const GET_FRIEND_REQUESTS = gql`
  query viewer {
    viewer {
      ... on User {
        id
        friendRequests {
          id
          sender {
            id
            firstName
            lastName
          }
        }
      }
    }
  }
`

class FriendRequestScreen extends Component {
  render() {
    return (
      <Query query={GET_FRIEND_REQUESTS}>
        {({ loading, data }) => {
          if (loading) return <LoadingWrapper loading />
          return (
            <FlatList
              keyExtractor={friendRequest => friendRequest.id}
              data={data.viewer.friendRequests}
              renderItem={({ item: friendRequest }) => (
                <FriendRequestListItem
                  title={`${friendRequest.sender.firstName} ${
                    friendRequest.sender.lastName
                  }`}
                  friendRequestID={friendRequest.id}
                />
              )}
            />
          )
        }}
      </Query>
    )
  }
}

export default FriendRequestScreen
