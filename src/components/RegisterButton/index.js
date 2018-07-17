import React, { Component } from 'react'
import { Button, ButtonText } from './styles'

export default class RegisterButton extends Component {
  render() {
    return (
      <Button onPress={this.props.onPress} disabled={this.props.disabled}>
        <ButtonText>{this.props.buttonText}</ButtonText>
      </Button>
    )
  }
}
