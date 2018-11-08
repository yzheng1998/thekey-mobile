import React, { Component } from 'react'
import { Screen, Title, imageStyle, subtitleStyle } from './styles'
import Subtitle from '../../components/BasicSubtitle'
import { Image } from 'react-native'
import locationGraphic from '../../../assets/locationGraphic.png'
import RegisterButton from '../../components/RegisterButton'
import { connect } from 'react-redux'
import { updateCoordinates } from '../../redux/actions/membershipApplication'

const mapStateToProps = state => ({
  coordinates: state.membershipApplication.coordinates,
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
              this.props.navigation.navigate('PhotoUpload')
            }
            this.getPosition(callback)
          }}
          buttonText="ENABLE LOCATION"
        />
        <RegisterButton
          style={{ marginTop: 36 }}
          onPress={() => {
            this.props.navigation.navigate('Share')
          }}
          secondary
          noBorder
          buttonText="No thanks"
        />
      </Screen>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LocationScreen)
