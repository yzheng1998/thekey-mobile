import React, { Component } from 'react'
import {
  ConnectionsRowContainer,
  MutualConnections,
  Avatar,
  AvatarContainer,
} from './styles'

const getConnectionsText = connectionsNum => {
  if (connectionsNum === 1) {
    return '1 mutual connection'
  }
  return `${connectionsNum} mutual connections`
}

const ConnectionsText = ({ connectionsNum }) => (
  <MutualConnections>
    {connectionsNum > 0 && getConnectionsText(connectionsNum)}
  </MutualConnections>
)

export default class MutualConnectionsRow extends Component {
  render() {
    const { connectionsNum, mutualFriends, avatarSize } = this.props
    return (
      <ConnectionsRowContainer
        onPress={() =>
          this.props.navigation.navigate('PeopleList', {
            people: mutualFriends,
            title: 'Mutual Friends',
          })
        }
      >
        <AvatarContainer>
          {mutualFriends.map(friend => (
            <Avatar
              avatarSize={avatarSize}
              source={{ uri: friend.profilePicture }}
              key={friend.id}
            />
          ))}
        </AvatarContainer>
        <ConnectionsText connectionsNum={connectionsNum} />
      </ConnectionsRowContainer>
    )
  }
}
