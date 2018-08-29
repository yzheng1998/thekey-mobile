import React, { Component } from 'react'
import { Container, TitleRow, Title, BackButton, Divider } from './styles'
import BackButtonIcon from 'react-native-vector-icons/Ionicons'
import RegistrationProgressBar from '../RegistrationProgressBar'

class Header extends Component {
  render() {
    const {
      onBackPress,
      showBack,
      title,
      children,
      progress,
      showDivider,
    } = this.props
    return (
      <Container noMargin>
        <TitleRow>
          <BackButton
            hitSlop={{ top: 5, left: 5, bottom: 5, right: 5 }}
            onPress={onBackPress}
          >
            {showBack && (
              <BackButtonIcon name="ios-arrow-back" size={30} color="black" />
            )}
          </BackButton>
          <Title>{title}</Title>
          {children}
        </TitleRow>
        {progress && <RegistrationProgressBar progress={progress} />}
        {showDivider && <Divider />}
      </Container>
    )
  }
}

export default Header
