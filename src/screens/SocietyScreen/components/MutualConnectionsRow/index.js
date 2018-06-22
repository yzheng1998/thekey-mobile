import React, { Component } from 'react'
import {
  ConnectionsRowContainer,
  MutualConnections,
  Avatar,
  AvatarContainer,
} from './styles'

export default class MutualConnectionsRow extends Component {
  render() {
    const { connectionsNum, mutualFriends, avatarSize } = this.props
    return (
      <ConnectionsRowContainer>
        <AvatarContainer>
          {mutualFriends.map(friend => (
            <Avatar
              avatarSize={avatarSize}
              source={friend.profilePicture}
              key={friend.id}
            />
          ))}
        </AvatarContainer>
        <MutualConnections>
          {connectionsNum
            ? `${connectionsNum} mutual connections`
            : `0 mutual connections`}
        </MutualConnections>
      </ConnectionsRowContainer>
    )
  }
}
