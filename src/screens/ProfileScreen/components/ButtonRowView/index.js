import React, { Component } from 'react'
import { ButtonRow, BackButton, Settings } from './styles'

import BackArrow from 'react-native-vector-icons/Ionicons'
import SettingsGear from 'react-native-vector-icons/Feather'
import { buttonRadius } from '../../../../constants'

export default class ButtonRowView extends Component {
  render() {
    return (
      <ButtonRow>
        <BackButton hitSlop={buttonRadius} onPress={this.props.goBack}>
          <BackArrow name="ios-arrow-back" color="white" size={30} />
        </BackButton>
        <Settings hitSlop={buttonRadius} onPress={this.props.showSettings}>
          <SettingsGear name="settings" color="white" size={25} />
        </Settings>
      </ButtonRow>
    )
  }
}
