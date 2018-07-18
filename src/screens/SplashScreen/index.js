import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Container, Content, SubTitle, Title } from './styles'
import Logo from '../../stories/thekey-logo.png'

export class SplashScreen extends Component {
  render() {
    return (
      <View>
        <Container>
          <Content>
            <Image source={Logo} style={{ height: 105, width: 79 }} />
            <SubTitle>Welcome to</SubTitle>
            <Title>The Key</Title>
          </Content>
        </Container>
      </View>
    )
  }
}
