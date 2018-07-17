import React, { Component } from 'react'
import { Container, TitleRow, Title, BackButtonContainer } from './styles'
import BackButtonIcon from 'react-native-vector-icons/Ionicons'

class Header extends Component {
  render() {
    return (
      <Container>
        <TitleRow>
          <BackButtonContainer>
            <BackButtonIcon name="ios-arrow-back" size={27} color="black" />
          </BackButtonContainer>
          <Title>Initiation</Title>
        </TitleRow>
      </Container>
    )
  }
}

export default Header
