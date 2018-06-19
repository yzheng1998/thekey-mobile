import React, { Component } from 'react'
import {
  ConnectionsRowContainer,
  MutualConnections,
  Avatar,
  AvatarContainer,
} from './styles'

export default class ConnectionsRow extends Component {
  render() {
    return (
      <ConnectionsRowContainer>
        <AvatarContainer>
          {this.props.mutualFriends.map(
            (friend, i) =>
              i < this.props.avatarNum && (
                <Avatar
                  avatarSize={this.props.avatarSize}
                  source={friend.profilePicture}
                  key={friend.id}
                />
              ),
          )}
        </AvatarContainer>
        <MutualConnections>
          {this.props.mutualFriends.length} mutual connections
        </MutualConnections>
      </ConnectionsRowContainer>
    )
  }
}
