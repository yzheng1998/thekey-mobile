import React, { Component } from 'react'
import { Button, ButtonText } from './styles'

export default class SubmitButton extends Component {
  render() {
    return (
      <Button onPress={this.props.onPress}>
        <ButtonText>{this.props.buttonText}</ButtonText>
      </Button>
    )
  }
}
