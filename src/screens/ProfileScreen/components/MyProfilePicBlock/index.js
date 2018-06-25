import React, { Component } from 'react'
import {
  BlockContainer,
  EventTitleText,
  LocationText,
  EditButton,
  EditLabel,
} from './styles'
import PictureHeader from '../../../../components/PictureHeader'
import EditPencil from 'react-native-vector-icons/MaterialIcons'

export default class MyProfilePicBlock extends Component {
  render() {
    const { profilePic, name, city, state } = this.props
    return (
      <BlockContainer>
        <PictureHeader picture={profilePic} avatarSize={123}>
          <EventTitleText>{name}</EventTitleText>
          <LocationText>
            {city}, {state}
          </LocationText>
          <EditButton activeOpacity={0.5}>
            <EditPencil name="edit" color="white" />
            <EditLabel>EDIT PROFILE</EditLabel>
          </EditButton>
        </PictureHeader>
      </BlockContainer>
    )
  }
}
