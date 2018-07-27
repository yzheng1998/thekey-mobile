import React, { Component } from 'react'
import {
  ConnectionsRowContainer,
  Avatar,
  AvatarContainer,
  Number,
  Container,
} from './styles'

export default class MutualFriends extends Component {
  static defaultProps = {
    numberOfPics: 4,
    title: 'Mutual Friends',
    navigateTo: 'PeopleList',
  }
  render() {
    const {
      mutualFriends,
      avatarSize,
      numberOfPics,
      title,
      navigateTo,
    } = this.props
    return (
      <ConnectionsRowContainer
        onPress={() =>
          this.props.navigation.navigate(navigateTo, {
            people: mutualFriends,
            title,
          })
        }
      >
        <AvatarContainer>
          {mutualFriends
            .slice(0, numberOfPics)
            .map(friend => (
              <Avatar
                avatarSize={avatarSize}
                source={{ uri: friend.profilePicture }}
                key={friend.id}
              />
            ))}
          {mutualFriends.length > numberOfPics && (
            <Container>
              <Avatar
                avatarSize={avatarSize}
                source={{
                  uri:
                    'https://upload.wikimedia.org/wikipedia/commons/1/1e/A_blank_black_picture.jpg',
                }}
                key={Math.random()}
              />
              <Number>+{mutualFriends.length - numberOfPics}</Number>
            </Container>
          )}
        </AvatarContainer>
      </ConnectionsRowContainer>
    )
  }
}
