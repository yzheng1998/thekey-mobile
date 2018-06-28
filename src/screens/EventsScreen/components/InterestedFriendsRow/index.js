import React, { Component } from 'react'
import {
  ConnectionsRowContainer,
  InterestedFriendsContainer,
  Avatar,
  AvatarContainer,
} from './styles'

export default class InterestedFriendsRow extends Component {
  render() {
    const { connectionsNum, interestedFriends, avatarSize } = this.props
    return (
      <ConnectionsRowContainer>
        <AvatarContainer>
          {interestedFriends.map(friend => (
            <Avatar
              avatarSize={avatarSize}
              source={friend.profilePicture}
              key={friend.id}
            />
          ))}
        </AvatarContainer>
        <InterestedFriendsContainer>
          {connectionsNum
            ? `${interestedFriends[0].firstName} and ${connectionsNum -
                1} friends`
            : `0 interested friends`}
        </InterestedFriendsContainer>
      </ConnectionsRowContainer>
    )
  }
}
