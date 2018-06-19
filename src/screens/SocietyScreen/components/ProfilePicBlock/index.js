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
    return (
      <BlockContainer>
        <BackgroundProfilePic source={this.props.profilePic} blurRadius={20}>
          <ProfilePic source={this.props.profilePic} />
          <EventTitleText>{this.props.name}</EventTitleText>
          <LocationText>
            {this.props.city}, {this.props.state}
          </LocationText>
        </BackgroundProfilePic>
      </BlockContainer>
    )
  }
}
