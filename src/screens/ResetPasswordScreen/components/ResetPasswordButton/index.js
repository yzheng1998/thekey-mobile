import React, { Component } from 'react'
import { Button, ButtonText } from './styles'

export default class ResetPasswordButton extends Component {
  render() {
    return (
      <Button onPress={this.props.onPress}>
        <ButtonText>SEND RESET PASSWORD LINK</ButtonText>
      </Button>
    )
  }
}
