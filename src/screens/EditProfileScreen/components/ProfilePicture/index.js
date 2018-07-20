import React, { Component } from 'react'
import { Picture, PictureButton, EditLabel } from '../../styles'

import ImagePicker from 'react-native-image-crop-picker'

export default class ProfilePicture extends Component {
  state = {
    profilePicture: '',
  }
  render() {
    const { profilePicture, defaultProfilePicture } = this.props
    return (
      <Picture
        source={{
          uri:
            this.state.profilePicture ||
            profilePicture ||
            defaultProfilePicture,
        }}
      >
        <PictureButton
          onPress={() =>
            ImagePicker.openPicker({
              width: 300,
              height: 400,
              cropping: true,
            }).then(image => {
              this.setState({ profilePicture: image.sourceURL })
            })
          }
        >
          <EditLabel>EDIT</EditLabel>
        </PictureButton>
      </Picture>
    )
  }
}
