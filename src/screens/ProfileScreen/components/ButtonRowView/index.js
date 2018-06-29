import React, { Component } from 'react'
import { ButtonRow, BackButton, Settings } from './styles'

import BackArrow from 'react-native-vector-icons/Ionicons'
import SettingsGear from 'react-native-vector-icons/Feather'

export default class ButtonRowView extends Component {
  render() {
    return (
      <ButtonRow>
        <BackButton onPress={this.props.goBack}>
          <BackArrow name="ios-arrow-back" color="white" size={33} />
        </BackButton>
        <Settings onPress={() => this.props.navigation.navigate('Settings')}>
          <SettingsGear name="settings" color="white" size={25} />
        </Settings>
      </ButtonRow>
    )
  }
}
