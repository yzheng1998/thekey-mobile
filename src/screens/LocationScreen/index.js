import React, { Component } from 'react'
import { Screen, Title, imageStyle, subtitleStyle } from './styles'
import Subtitle from '../../components/BasicSubtitle'
import { Image } from 'react-native'
import locationGraphic from '../../../assets/locationGraphic.png'
import RegisterButton from '../../components/RegisterButton'

export default class LocationScreen extends Component {
  state = {
    latitude: null,
    longitude: null,
  }

  getPosition = () => {
    navigator.geolocation.getCurrentPosition(position => ({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    }))
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
          onPress={() =>
            this.props.navigation.navigate('PhotoUpload', {
              position: this.getPosition,
            })
          }
          buttonText="ENABLE LOCATION"
        />
        <RegisterButton
          style={{ marginTop: 36 }}
          onPress={() => {
            this.props.navigation.navigate('PhotoUpload')
          }}
          secondary
          noBorder
          buttonText="No thanks"
        />
      </Screen>
    )
  }
}
