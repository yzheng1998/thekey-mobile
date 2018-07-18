import React, { Component } from 'react'
import {
  Container,
  TitleRow,
  Title,
  BackButtonContainer,
  ProgressBarContainer,
} from './styles'
import ProgressBar from '../../../../components/RegistrationProgressBar'
import BackButtonIcon from 'react-native-vector-icons/Ionicons'

class Header extends Component {
  render() {
    return (
      <Container>
        <TitleRow>
          <BackButtonContainer>
            <BackButtonIcon name="ios-arrow-back" size={27} color="black" />
          </BackButtonContainer>
          <Title>Your Education</Title>
        </TitleRow>
        <ProgressBarContainer>
          <ProgressBar progress="32%" />
        </ProgressBarContainer>
      </Container>
    )
  }
}

export default Header
