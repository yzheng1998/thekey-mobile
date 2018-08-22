import React, { Component } from 'react'
import { ButtonRow, BackButtonContainer } from './styles'
import BackButton from 'react-native-vector-icons/Ionicons'
import { buttonRadius } from '../../constants'

export default class MainButtonRow extends Component {
  render() {
    return (
      <ButtonRow>
        <BackButtonContainer
          hitSlop={buttonRadius}
          onPress={() => this.props.navigation.goBack()}
        >
          <BackButton name="ios-arrow-back" size={30} color="white" />
        </BackButtonContainer>
        {this.props.children}
      </ButtonRow>
    )
  }
}
