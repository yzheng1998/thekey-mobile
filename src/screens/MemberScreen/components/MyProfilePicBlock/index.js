import React, { Component } from 'react'
import {
  BlockContainer,
  EventTitleText,
  LocationText,
  EditButton,
  EditLabel,
  Container,
} from './styles'
import PictureHeader from '../../../../components/PictureHeader'
import MutualFriends from '../MutualFriends'

export default class MyProfilePicBlock extends Component {
  render() {
    const { profilePic, mutualFriends, name, hometown } = this.props
    return (
      <BlockContainer>
        <PictureHeader picture={profilePic} avatarSize={123}>
          <EventTitleText>{name}</EventTitleText>
          <LocationText>{hometown}</LocationText>
          <Container>
            <MutualFriends mutualFriends={mutualFriends} avatarSize={26} />
          </Container>
          <EditButton
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate('EditProfile')}
          >
            <EditLabel>CONNECT</EditLabel>
          </EditButton>
        </PictureHeader>
      </BlockContainer>
    )
  }
}
