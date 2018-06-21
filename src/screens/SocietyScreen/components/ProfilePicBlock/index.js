import React, { Component } from 'react'
import {
  BlockContainer,
  BackgroundProfilePic,
  ProfilePic,
  EventTitleText,
  LocationText,
} from './styles'

export default class ProfilePicBlock extends Component {
  render() {
    const { profilePic, name, city, state } = this.props
    return (
      <BlockContainer>
        <BackgroundProfilePic source={profilePic} blurRadius={20}>
          <ProfilePic source={profilePic} />
          <EventTitleText>{name}</EventTitleText>
          <LocationText>
            {city}, {state}
          </LocationText>
        </BackgroundProfilePic>
      </BlockContainer>
    )
  }
}
