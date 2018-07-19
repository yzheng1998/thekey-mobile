import React, { Component } from 'react'
import { Container, TitleRow, Title, BackButtonContainer } from './styles'
import BackButtonIcon from 'react-native-vector-icons/Ionicons'
import RegistrationProgressBar from '../RegistrationProgressBar'

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
          {this.props.children}
        </TitleRow>
        {this.props.progress && (
          <RegistrationProgressBar progress={this.props.progress} />
        )}
      </Container>
    )
  }
}

export default Header
