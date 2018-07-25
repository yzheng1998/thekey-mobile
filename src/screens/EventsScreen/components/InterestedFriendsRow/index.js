import React, { Component } from 'react'
import {
  ConnectionsRowContainer,
  InterestedFriendsContainer,
  Avatar,
  AvatarContainer,
} from './styles'

const renderConnectionsText = (connectionsNum, interestedFriends) => {
  if (connectionsNum === 0) {
    return '0 interested friends'
  } else if (connectionsNum === 1) {
    return `${interestedFriends[0].firstName} is interested`
  }
  return `${interestedFriends[0].firstName} and ${connectionsNum - 1} friends`
}
const ConnectionsText = ({ connectionsNum, interestedFriends }) => (
  <InterestedFriendsContainer>
    {renderConnectionsText(connectionsNum, interestedFriends)}
  </InterestedFriendsContainer>
)
export default class InterestedFriendsRow extends Component {
  render() {
    const { connectionsNum, interestedFriends, avatarSize } = this.props
    return (
      <ConnectionsRowContainer
        onPress={() =>
          this.props.navigation.navigate('PeopleList', {
            people: interestedFriends,
            title: 'Interested Friends',
          })
        }
      >
        <AvatarContainer>
          {interestedFriends.map(friend => (
            <Avatar
              avatarSize={avatarSize}
              source={{ uri: friend.profilePicture }}
              key={friend.id}
            />
          ))}
        </AvatarContainer>
        <ConnectionsText
          connectionsNum={connectionsNum}
          interestedFriends={interestedFriends}
        />
      </ConnectionsRowContainer>
    )
  }
}
