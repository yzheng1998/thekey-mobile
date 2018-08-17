import React, { Component } from 'react'
import { Container, NameText, LocationText } from './styles'
import PictureHeader from '../../../../components/PictureHeader'

export default class ProfilePicBlock extends Component {
  render() {
    const { profilePic, name, hometown } = this.props
    return (
      <Container>
        <PictureHeader marginTop={45} picture={profilePic} avatarSize={171}>
          <NameText />
          <NameText>{name}</NameText>
          <LocationText>{hometown}</LocationText>
        </PictureHeader>
      </Container>
    )
  }
}
