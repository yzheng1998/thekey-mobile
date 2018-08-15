import React, { Component } from 'react'
import { Button, ButtonText, TextContainer, IconContainer } from './styles'
import Icon from 'react-native-vector-icons/Entypo'

export default class FBLoginButton extends Component {
  render() {
    const { onPress, text, small } = this.props
    return (
      <Button onPress={onPress} small={small}>
        <IconContainer small={small}>
          <Icon name="facebook" color="white" size={small ? 17 : 30} />
        </IconContainer>
        <TextContainer small={small}>
          <ButtonText small={small}>{text}</ButtonText>
        </TextContainer>
      </Button>
    )
  }
}
