import React, { Component } from 'react'
import {
  Container,
  TitleRow,
  Title,
  BackButtonContainer,
  ProgressBarContainer,
} from './styles'
import ProgressBar from '../../components/RegistrationProgressBar'
import BackButtonIcon from 'react-native-vector-icons/Ionicons'

class Header extends Component {
  render() {
    return (
      <Container>
        <TitleRow>
          <BackButtonContainer onPress={this.props.onBackPress}>
            {this.props.showBack && (
              <BackButtonIcon name="ios-arrow-back" size={27} color="black" />
            )}
          </BackButtonContainer>
          <Title>{this.props.title}</Title>
        </TitleRow>
        {this.props.showProgress && (
          <ProgressBarContainer>
            <ProgressBar progress={this.props.progress} />
          </ProgressBarContainer>
        )}
      </Container>
    )
  }
}

export default Header
