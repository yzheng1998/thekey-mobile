import React, { Component } from 'react'
import { ButtonRow, BackButton } from '../../styles'
import BackArrow from 'react-native-vector-icons/Ionicons'
import { buttonRadius } from '../../../../constants'

export default class ButtonRowComponent extends Component {
  render() {
    const { children } = this.props
    return (
      <ButtonRow>
        <BackButton
          hitSlop={buttonRadius}
          onPress={() => this.props.navigation.goBack()}
        >
          <BackArrow name="ios-arrow-back" color="white" size={30} />
        </BackButton>
        {children}
      </ButtonRow>
    )
  }
}
