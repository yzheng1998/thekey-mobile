import React, { Component } from 'react'
import { BackButtonContainer } from './styles'
import BackButtonIcon from 'react-native-vector-icons/Ionicons'

export default class BackButtonRelative extends Component {
  render() {
    return (
      <BackButtonContainer
        hitSlop={{ top: 5, left: 5, bottom: 5, right: 5 }}
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
