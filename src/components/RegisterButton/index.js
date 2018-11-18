import React, { Component } from 'react'
import { Button, ButtonText } from './styles'

export default class RegisterButton extends Component {
  render() {
    const {
      secondary,
      tertiary,
      onPress,
      disabled,
      noBorder,
      children,
      buttonText,
      style,
    } = this.props
    return (
      <Button
        secondary={secondary || tertiary}
        onPress={onPress}
        disabled={disabled}
        noBorder={noBorder}
        style={style}
      >
        {children}
        <ButtonText
          disabled={disabled}
          tertiary={tertiary}
          secondary={secondary}
        >
          {buttonText}
        </ButtonText>
      </Button>
    )
  }
}
