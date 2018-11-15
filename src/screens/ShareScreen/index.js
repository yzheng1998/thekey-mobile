import React, { Component } from 'react'
import { Screen, Title, imageStyle, subtitleStyle } from './styles'
import Subtitle from '../../components/BasicSubtitle'
import { Image } from 'react-native'
import inviteGraphic from '../../../assets/inviteGraphic.png'
import RegisterButton from '../../components/RegisterButton'
import { text } from 'react-native-communications'

export default class ShareScreen extends Component {
  render() {
    return (
      <Screen>
        <Image source={inviteGraphic} style={imageStyle} />
        <Title>Invite your friends to join</Title>
        <Subtitle style={subtitleStyle}>
          Build a community of strong, {'\n'}connected individuals.
        </Subtitle>
        <RegisterButton
          onPress={() => {
            text(null, 'Join the key! http://onelink.to/ywz9nu')
            this.props.navigation.navigate('Splash')
          }}
          buttonText="INVITE MY FRIENDS"
        />
        <RegisterButton
          style={{ marginTop: 36 }}
          onPress={() => {
            this.props.navigation.navigate('Splash')
          }}
          secondary
          noBorder
          buttonText="No thanks"
        />
      </Screen>
    )
  }
}
