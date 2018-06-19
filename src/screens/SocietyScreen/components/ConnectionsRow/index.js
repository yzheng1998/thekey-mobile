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
          {this.props.avatarArray.map(
            (avatar, i) =>
              i < this.props.avatarNum && (
                <Avatar
                  avatarSize={this.props.avatarSize}
                  source={avatar.avatar}
                  key={avatar.id}
                />
              ),
          )}
        </AvatarContainer>
        <MutualConnections>
          {this.props.connections} mutual connections
        </MutualConnections>
      </ConnectionsRowContainer>
    )
  }
}
