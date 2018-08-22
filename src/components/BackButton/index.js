import React, { Component } from 'react'
import { BackButtonContainer } from './styles'
import BackButtonIcon from 'react-native-vector-icons/Ionicons'
import { buttonRadius } from '../../constants'

export default class BackButton extends Component {
  render() {
    return (
      <BackButtonContainer
        hitSlop={buttonRadius}
        onPress={this.props.onBackPress}
      >
        <BackButtonIcon
          name="ios-arrow-back"
          size={this.props.size || 30}
          color={this.props.color || 'black'}
        />
      </BackButtonContainer>
    )
  }
}
