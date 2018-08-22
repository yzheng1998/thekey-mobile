import React, { Component } from 'react'
import { ButtonRow, BackButton } from '../../styles'
import BackArrow from 'react-native-vector-icons/Ionicons'

export default class ButtonRowComponent extends Component {
  render() {
    const { children } = this.props
    return (
      <ButtonRow>
        <BackButton onPress={() => this.props.navigation.goBack()}>
          <BackArrow name="ios-arrow-back" color="white" size={30} />
        </BackButton>
        {children}
      </ButtonRow>
    )
  }
}
