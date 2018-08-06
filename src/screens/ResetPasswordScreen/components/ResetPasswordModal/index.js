import React, { Component } from 'react'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import {
  Container,
  SubtitleView,
  Subtitle,
  SafeView,
  InputContainer,
  TokenImage,
  ButtonContainer,
} from './styles'
import Header from '../../../../components/Header'
import ResetPasswordButton from '../ResetPasswordButton'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LineInput from '../../../../components/LineInput'
import LockIcon from 'react-native-vector-icons/Feather'
import KeyIcon from '../../../../../assets/token.jpg'

export default class ResetPasswordModal extends Component {
  state = {
    token: '',
    password: '',
    confirmPassword: '',
  }
  updateToken = text => {
    this.setState({ token: text })
  }
  updatePassword = pass => {
    this.setState({ password: pass })
  }
  updateConfirmPassword = pass => {
    this.setState({ confirmPassword: pass })
  }
  clearContent = () => {
    this.setState({ token: '', password: '', confirmPassword: '' })
  }
  render() {
    const { isVisible, closeModal, email, navigateToLogin } = this.props
    return (
      <Container
        isVisible={isVisible}
        animationIn="slideInRight"
        animationOut="slideOutRight"
      >
        <SafeView>
          <Header title="Reset Password" showBack onBackPress={closeModal} />
          <KeyboardAwareScrollView>
            <InputContainer>
              <SubtitleView>
                <Subtitle>
                  Enter the reset token from the received email along with your
                  new password to reset.
                </Subtitle>
              </SubtitleView>
              <LineInput
                updateText={text => this.updateToken(text)}
                text={this.state.token}
                placeholderText="Token"
                autoCapitalize="none"
              >
                <TokenImage source={KeyIcon} />
              </LineInput>
              <LineInput
                updateText={text => this.updatePassword(text)}
                text={this.state.password}
                placeholderText="Password (minimum 6 characters)"
                autoCapitalize="none"
                secureTextEntry
              >
                <LockIcon name="lock" color="rgb(181, 171, 202)" size={18} />
              </LineInput>
              <LineInput
                updateText={text => this.updateConfirmPassword(text)}
                text={this.state.confirmPassword}
                placeholderText="Confirm password"
                autoCapitalize="none"
                secureTextEntry
              >
                <LockIcon name="lock" color="rgb(181, 171, 202)" size={18} />
              </LineInput>
            </InputContainer>
            <ButtonContainer>
              <ResetPasswordButton
                disabled={
                  !(
                    this.state.password.length >= 6 &&
                    this.state.confirmPassword.length >= 6 &&
                    this.state.password === this.state.confirmPassword
                  )
                }
                email={email}
                password={this.state.password}
                token={this.state.token}
                closeModal={closeModal}
                clearContent={this.clearContent}
                navigateToLogin={navigateToLogin}
              />
            </ButtonContainer>
          </KeyboardAwareScrollView>
          <KeyboardSpacer />
        </SafeView>
      </Container>
    )
  }
}
