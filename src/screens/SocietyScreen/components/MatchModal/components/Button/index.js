import React, { Component } from 'react'
import { ButtonContainer, ButtonText } from './styles'

export default class Button extends Component {
  render() {
    const { buttonText, onPress } = this.props
    return (
      <ButtonContainer onPress={onPress}>
        <ButtonText>{buttonText}</ButtonText>
      </ButtonContainer>
    )
  }
}
