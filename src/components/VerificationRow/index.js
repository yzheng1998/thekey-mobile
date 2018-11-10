import React, { Component } from 'react'
import { containerStyle, codeInputStyle } from './styles'
import CodeInput from 'react-native-confirmation-code-input'

export default class VerificationRow extends Component {
  render() {
    const { compareWithCode, onSubmit } = this.props
    return (
      <CodeInput
        codeLength={4}
        keyboardType="numeric"
        compareWithCode={compareWithCode}
        activeColor="rgb(255, 90, 83)"
        inactiveColor="rgb(229, 223, 242)"
        inputPosition="center"
        size={62}
        onFulfill={isValid => onSubmit(isValid)}
        containerStyle={containerStyle}
        codeInputStyle={codeInputStyle}
      />
    )
  }
}
