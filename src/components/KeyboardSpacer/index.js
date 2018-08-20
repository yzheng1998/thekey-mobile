import React, { Component } from 'react'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import { Platform } from 'react-native'

export default class KeyboardSpacerComponent extends Component {
  render() {
    return Platform.OS === 'ios' ? <KeyboardSpacer /> : null
  }
}
