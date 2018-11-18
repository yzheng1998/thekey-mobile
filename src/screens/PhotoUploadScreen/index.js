import React, { Component } from 'react'
import { Screen } from './styles'
import Header from '../../components/Header'
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
          progress="100%"
        />
        <PhotoUploadButton updateProfilePicture={this.updateProfilePicture} />
        <RegisterButton
          onPress={() => this.props.navigation.navigate('Location')}
          disabled={!this.state.profilePicture}
          keyboardShouldPersistTaps="always"
          buttonText="CONTINUE"
        />
      </Screen>
    )
  }
}
