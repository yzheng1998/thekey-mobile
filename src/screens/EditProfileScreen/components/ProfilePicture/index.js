import React, { Component } from 'react'
import { Picture, PictureButton, EditLabel } from '../../styles'

import ImagePicker from 'react-native-image-crop-picker'

export default class ProfilePicture extends Component {
  state = {
    profilePicture: '',
  }
  render() {
    const { profilePicture } = this.props
    return (
      <Picture
        source={{
          uri:
            this.state.profilePicture ||
            profilePicture ||
            'https://images.unsplash.com/photo-1519145897500-869c40ccb024?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dc363c8e033813d4f7b798846bb13a24&auto=format&fit=crop&w=582&q=80',
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
