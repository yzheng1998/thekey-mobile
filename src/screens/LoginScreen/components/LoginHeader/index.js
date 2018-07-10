import React, { Component } from 'react'
import { Image } from 'react-native'
import { Container, Content, SubTitle, Title } from './styles'
import Logo from '../../../../stories/thekey-logo.png'

class LoginHeader extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Image source={Logo} style={{ height: 105, width: 79 }} />
          <SubTitle>Welcome to</SubTitle>
          <Title>The Key</Title>
        </Content>
      </Container>
    )
  }
}

export default LoginHeader
