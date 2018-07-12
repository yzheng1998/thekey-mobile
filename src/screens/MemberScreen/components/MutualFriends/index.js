import React, { Component } from 'react'
import {
  ConnectionsRowContainer,
  Avatar,
  AvatarContainer,
  Number,
  Container,
} from './styles'

export default class MutualFriends extends Component {
  render() {
    const { mutualFriends, avatarSize } = this.props
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
          {mutualFriends
            .slice(0, 4)
            .map(friend => (
              <Avatar
                avatarSize={avatarSize}
                source={friend.profilePicture}
                key={friend.id}
              />
            ))}
          {mutualFriends.length >= 5 && (
            <Container>
              <Avatar
                avatarSize={avatarSize}
                source={{
                  uri:
                    'https://upload.wikimedia.org/wikipedia/commons/1/1e/A_blank_black_picture.jpg',
                }}
                key={Math.random()}
              />
              <Number>+{mutualFriends.length - 4}</Number>
            </Container>
          )}
        </AvatarContainer>
      </ConnectionsRowContainer>
    )
  }
}
