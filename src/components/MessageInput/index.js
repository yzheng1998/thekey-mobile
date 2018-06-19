import React, { Component } from 'react'
import { InputBox, Container, ButtonContainer } from './styles'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

export default class MessageInput extends Component {
  render() {
    return (
      <Container>
        <InputBox multiline placeholder="Message" autoGrow={false} />
        <ButtonContainer>
          <Icon
            name="paper-plane"
            color="rgb(250, 53, 121)"
            size={18}
            style={{ paddingTop: 5 }}
          />
        </ButtonContainer>
      </Container>
    )
  }
}
