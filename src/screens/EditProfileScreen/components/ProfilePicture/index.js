import React, { Component } from 'react'
import { Picture, PictureButton, EditLabel } from '../../styles'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import RNFetchBlob from 'rn-fetch-blob'
import { Alert } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker'
import config from '../../../../../config'

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
            const imageNameRegEx = /.*amazonaws.com\/(.*)\?.*/
            const match = imageNameRegEx.exec(data.signS3Url.url)
            const imageName = match.length > 0 ? match[1] : ''
            const finalUrl = config.s3Bucket + imageName
            updateProfilePicture(finalUrl)
          }}
        >
          {(signS3Url, { error }) => {
            if (error) {
              Alert.alert(
                'Picture upload failed',
                'There was an error uploading your picture. Please try again.',
                [{ text: 'OK', onPress: () => {} }],
                { cancelable: true },
              )
            }
            return (
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
            )
          }}
        </Mutation>
      </Picture>
    )
  }
}
