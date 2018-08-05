import React, { Component } from 'react'
import { Container, Content, SubTitle, Title, SafeView } from './styles'

class LoginHeader extends Component {
  render() {
    return (
      <SafeView>
        <Container>
          <Content>
            <SubTitle>Welcome to</SubTitle>
            <Title>The Key</Title>
          </Content>
        </Container>
      </SafeView>
    )
  }
}

export default LoginHeader
