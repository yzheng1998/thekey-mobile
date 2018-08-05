import React, { Component } from 'react'
import { Background, Container, Message, IconContainer } from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class AlertMessage extends Component {
  render() {
    const { isError, message } = this.props
    return (
      <Background>
        <Container isError={isError}>
          <IconContainer>
            <Icon
              name={isError ? 'exclamation-circle' : 'check'}
              color="white"
              size={15}
            />
          </IconContainer>
          <Message>{message}</Message>
        </Container>
      </Background>
    )
  }
}
