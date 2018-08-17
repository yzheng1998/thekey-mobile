import React, { Component } from 'react'
import { Button, ButtonText } from './styles'

export default class RegisterButton extends Component {
  render() {
    return (
      <Button
        secondary={this.props.secondary}
        onPress={this.props.onPress}
        disabled={this.props.disabled}
        noBorder={this.props.noBorder}
      >
        {this.props.children}
        <ButtonText secondary={this.props.secondary}>
          {this.props.buttonText}
        </ButtonText>
      </Button>
    )
  }
}
