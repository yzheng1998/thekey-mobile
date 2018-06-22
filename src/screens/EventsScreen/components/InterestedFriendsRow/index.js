import React, { Component } from 'react'
import {
  ConnectionsRowContainer,
  InterestedFriends,
  Avatar,
  AvatarContainer,
} from './styles'

export default class InterestedFriendsRow extends Component {
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
        <InterestedFriends>
          {connectionsNum
            ? `${mutualFriends[0].firstName} and ${connectionsNum - 1} friends`
            : `0 interested friends`}
        </InterestedFriends>
      </ConnectionsRowContainer>
    )
  }
}
