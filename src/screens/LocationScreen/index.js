import React, { Component } from 'react'
import { Screen, Title, imageStyle, subtitleStyle } from './styles'
import Subtitle from '../../components/BasicSubtitle'
import { Image, View, Alert } from 'react-native'
import locationGraphic from '../../../assets/locationGraphic.png'
import RegisterButton from '../../components/RegisterButton'
import { connect } from 'react-redux'
import { updateCoordinates } from '../../redux/actions/membershipApplication'
import { SEND_MEMBERSHIP_APPLICATION } from './mutations'
import { Mutation } from 'react-apollo'

const mapStateToProps = state => ({
  membershipApplication: state.membershipApplication,
})

const mapDispatchToProps = {
  updateCoordinates,
}

class LocationScreen extends Component {
  state = {
    latitude: null,
    longitude: null,
  }

  getPosition = callback => {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState(
        {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        },
        callback,
      )
    })
  }

  render() {
    return (
      <Screen>
        <Image source={locationGraphic} style={imageStyle} />
        <Title>Enable Location</Title>
        <Subtitle style={subtitleStyle}>
          Let The Key help you find like-minded people, events and job listings
          nearby.
        </Subtitle>
        <Mutation
          mutation={SEND_MEMBERSHIP_APPLICATION}
          onCompleted={() => {
            this.props.navigation.navigate('Share')
            Alert.alert(
              'Thank you for applying to The Key!',
              'We will review your application and get back to you shortly.',
            )
          }}
        >
          {(sendMembershipApplication, { error }) => {
            if (error) {
              Alert.alert(
                'Failed to upload your application',
                'There was an error sending in your application. Please try again.',
                [{ text: 'OK', onPress: () => {} }],
                { cancelable: true },
              )
            }
            return (
              <View>
                <RegisterButton
                  onPress={() => {
                    const coordinates = {
                      latitude: this.state.latitude,
                      longitude: this.state.longitude,
                    }
                    const callback = () => {
                      this.props.updateCoordinates({
                        coordinates,
                      })
                      const variables = {
                        sendMembershipApplicationInput: this.props
                          .membershipApplication,
                      }
                      sendMembershipApplication({ variables })
                    }
                    this.getPosition(callback)
                  }}
                  buttonText="ENABLE LOCATION"
                />
                <RegisterButton
                  style={{ marginTop: 36 }}
                  onPress={() => {
                    const variables = {
                      sendMembershipApplicationInput: this.props
                        .membershipApplication,
                    }
                    sendMembershipApplication({ variables })
                  }}
                  tertiary
                  noBorder
                  buttonText="No thanks"
                />
              </View>
            )
          }}
        </Mutation>
      </Screen>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LocationScreen)
