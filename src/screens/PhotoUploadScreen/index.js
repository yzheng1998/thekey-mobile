import React, { Component } from 'react'
import { Screen } from './styles'
import Header from '../../components/Header'
import RegisterButton from '../../components/RegisterButton'
import PhotoUploadButton from './components/PhotoUploadButton'
import { updateProfilePicture } from '../../redux/actions/membershipApplication'
import { connect } from 'react-redux'

const mapDispatchToProps = {
  updateProfilePicture,
}

class PhotoUploadScreen extends Component {
  state = {
    profilePicture: null,
  }

  updateProfilePictureState = pic => {
    this.setState({ profilePicture: pic })
    this.props.updateProfilePicture(pic)
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
        <PhotoUploadButton
          updateProfilePicture={this.updateProfilePictureState}
        />
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

export default connect(
  null,
  mapDispatchToProps,
)(PhotoUploadScreen)
