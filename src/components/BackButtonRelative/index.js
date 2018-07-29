import React, { Component } from 'react'
import { BackButtonContainer } from './styles'
import BackButtonIcon from 'react-native-vector-icons/Ionicons'

export default class BackButtonRelative extends Component {
  render() {
    return (
      <BackButtonContainer onPress={this.props.onBackPress}>
        <BackButtonIcon
          name="ios-arrow-back"
          size={this.props.size || 33}
          color={this.props.color || 'black'}
        />
      </BackButtonContainer>
    )
  }
}
