import React, { Component } from 'react'
import { View, Text } from 'react-native'
import ConnectionCard from '../ConnectionCard'
import { Divider } from '../../styles'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

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
            profilePicture
          }
          recipient {
            id
          }
          status
        }
      }
    }
  }
`

export default class FriendRequestList extends Component {
  render() {
    return (
      <Query query={GET_FRIEND_REQUESTS} pollInterval={5000}>
        {({ loading, error, data, refetch }) => {
          if (loading) return <Text>`Loading...`</Text>
          if (error) return <Text>`Error! ${error.message}`</Text>
          return (
            <View>
              {data.viewer.friendRequests.map(friendRequest => (
                <ConnectionCard
                  id={friendRequest.id}
                  name={`${friendRequest.sender.firstName} ${
                    friendRequest.sender.lastName
                  }`}
                  timeStamp="2018-07-19 23:29:09.592-04"
                  picture={friendRequest.sender.profilePicture}
                  refreshPage={refetch}
                />
              ))}
              {data.viewer.friendRequests.length !== 0 && <Divider />}
            </View>
          )
        }}
      </Query>
    )
  }
}
