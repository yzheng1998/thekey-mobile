import React, { Component } from 'react'
import {
  ConnectionsRowContainer,
  MutualConnections,
  Avatar,
  AvatarContainer,
} from './styles'

const renderConnectionsText = connectionsNum => {
  if (connectionsNum === 0) {
    return '0 mutual connections'
  } else if (connectionsNum === 1) {
    return '1 mutual connection'
  }
  return `${connectionsNum} mutual connections`
}

const ConnectionsText = ({ connectionsNum }) => (
  <MutualConnections>{renderConnectionsText(connectionsNum)}</MutualConnections>
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
