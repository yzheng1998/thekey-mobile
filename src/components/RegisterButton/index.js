import React, { Component } from 'react'
import { Button, ButtonText } from './styles'

export default class RegisterButton extends Component {
  render() {
    const {
      secondary,
      onPress,
      disabled,
      noBorder,
      children,
      buttonText,
      style,
    } = this.props
    return (
      <Button
        secondary={secondary}
        onPress={onPress}
        disabled={disabled}
        noBorder={noBorder}
        style={style}
      >
        {children}
        <ButtonText disabled={disabled} secondary={secondary}>
          {buttonText}
        </ButtonText>
      </Button>
    )
  }
}
