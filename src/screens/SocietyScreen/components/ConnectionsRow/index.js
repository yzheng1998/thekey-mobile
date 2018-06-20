import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  ConnectionsRowContainer,
  MutualConnections,
  Avatar,
  AvatarContainer,
} from './styles'

export default class ConnectionsRow extends Component {
  static defaultProps = {
    customLabel: 'mutualConnections',
  }
  static propTypes = {
    customLabel: PropTypes.oneOf('mutualConnections', 'interestedFriends'),
  }
  render() {
    const { connectionsNum, mutualFriends, customLabel } = this.props
    let labelText = ''
    if (customLabel === 'mutualConnections') {
      if (connectionsNum) {
        labelText = `${connectionsNum} mutual connections`
      } else {
        labelText = '0 mutual connections'
      }
    } else if (customLabel === 'interestedFriends') {
      if (connectionsNum) {
        labelText = `${mutualFriends[0].firstName} and ${connectionsNum -
          1} friends`
      } else {
        labelText = '0 interested friends'
      }
    }
    return (
      <ConnectionsRowContainer>
        <AvatarContainer>
          {this.props.mutualFriends.map(friend => (
            <Avatar
              avatarSize={this.props.avatarSize}
              source={friend.profilePicture}
              key={friend.id}
            />
          ))}
        </AvatarContainer>
        <MutualConnections customLabel={this.props.customLabel}>
          {labelText}
        </MutualConnections>
      </ConnectionsRowContainer>
    )
  }
}
