import React, { Component } from 'react'
import { Screen } from './styles'
import Header from '../../components/Header'
import Subtitle from '../../components/BasicSubtitle'
import RegisterButton from '../../components/RegisterButton'
import PhotoUploadButton from './components/PhotoUploadButton'

export default class PhotoUploadScreen extends Component {
  state = {
    profilePicture: null,
  }

  updateProfilePicture = pic => {
    this.setState({ profilePicture: pic })
  }
  render() {
    return (
      <Screen>
        <Header
          title="Add a Profile Picture"
          showBack
          onBackPress={() => this.props.navigation.goBack()}
          progress="42.8%"
        />
        <Subtitle>Insert picture below</Subtitle>
        <PhotoUploadButton updateProfilePicture={this.updateProfilePicture} />
        <RegisterButton
          keyboardShouldPersistTaps="always"
          buttonText="CONTINUE"
        />
      </Screen>
    )
  }
}
