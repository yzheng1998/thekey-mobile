import React, { Component } from 'react'
import { Picture, PictureButton, EditLabel } from '../../styles'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import RNFetchBlob from 'rn-fetch-blob'

import ImagePicker from 'react-native-image-crop-picker'

const SIGN_S3_URL = gql`
  mutation signS3Url($signS3UrlInput: SignS3UrlInput!) {
    signS3Url(signS3UrlInput: $signS3UrlInput) {
      url
    }
  }
`

export default class ProfilePicture extends Component {
  state = {
    image: '',
  }
  render() {
    const {
      profilePicture,
      defaultProfilePicture,
      updateProfilePicture,
    } = this.props
    return (
      <Picture
        source={{
          uri:
            this.state.image.sourceURL ||
            profilePicture ||
            defaultProfilePicture,
        }}
      >
        <Mutation
          mutation={SIGN_S3_URL}
          onCompleted={data => {
            const {
              signS3Url: { url },
            } = data

            RNFetchBlob.fetch(
              'PUT',
              url,
              {
                'Content-Type': this.state.image.mime,
              },
              RNFetchBlob.wrap(this.state.image.path),
            )

            const bucketString = 'https://s3.amazonaws.com/thekey-events/'
            const stringContainingKey = data.signS3Url.url.split('/')[3]
            const key = stringContainingKey.substring(
              0,
              stringContainingKey.indexOf('JPG?') + 4,
            )
            const finalUrl = bucketString + key
            updateProfilePicture(finalUrl)
          }}
        >
          {signS3Url => (
            <PictureButton
              onPress={() =>
                ImagePicker.openPicker({
                  width: 300,
                  height: 300,
                  cropping: true,
                }).then(image => {
                  const variables = {
                    signS3UrlInput: {
                      fileName: image.filename,
                      contentType: image.mime,
                    },
                  }
                  signS3Url({ variables })
                  this.setState({ image })
                })
              }
            >
              <EditLabel>EDIT</EditLabel>
            </PictureButton>
          )}
        </Mutation>
      </Picture>
    )
  }
}
