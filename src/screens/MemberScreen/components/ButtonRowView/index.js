import React, { Component } from 'react'
import { ButtonRow, BackButton } from './styles'

import BackArrow from 'react-native-vector-icons/Ionicons'

export default class ButtonRowView extends Component {
  render() {
    return (
      <ButtonRow>
        <BackButton onPress={this.props.goBack}>
          <BackArrow name="ios-arrow-back" color="white" size={33} />
        </BackButton>
      </ButtonRow>
    )
  }
}
