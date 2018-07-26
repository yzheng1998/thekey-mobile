import React, { Component } from 'react'
import {
  BlockContainer,
  EventTitleText,
  LocationText,
  Container,
} from './styles'
import PictureHeader from '../../../../components/PictureHeader'
import MutualFriends from '../MutualFriends'
import SendFriendRequestButton from '../SendFriendRequestButton'

export default class MyProfilePicBlock extends Component {
  render() {
    const {
      profilePic,
      mutualFriends,
      name,
      hometown,
      id,
      navigation,
    } = this.props
    return (
      <BlockContainer>
        <PictureHeader picture={profilePic} avatarSize={123}>
          <EventTitleText>{name}</EventTitleText>
          <LocationText>{hometown}</LocationText>
          <Container>
            <MutualFriends
              mutualFriends={mutualFriends}
              avatarSize={26}
              navigation={navigation}
            />
          </Container>
          <SendFriendRequestButton recipientId={id} swipedLeft={false} />
        </PictureHeader>
      </BlockContainer>
    )
  }
}
