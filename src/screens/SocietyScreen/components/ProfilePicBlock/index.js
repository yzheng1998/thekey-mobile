import React, { Component } from 'react'
import { Container, EventTitleText, LocationText } from './styles'
import PictureHeader from '../../../../components/PictureHeader'

export default class ProfilePicBlock extends Component {
  render() {
    const { profilePic, name, city, state } = this.props
    return (
      <Container>
        <PictureHeader picture={profilePic} size={171}>
          <EventTitleText>{name}</EventTitleText>
          <LocationText>
            {city}, {state}
          </LocationText>
        </PictureHeader>
      </Container>
    )
  }
}
