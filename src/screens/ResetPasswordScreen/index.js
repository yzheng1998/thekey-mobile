import React, { Component } from 'react'
import {
  ScreenContainer,
  SubtitleView,
  Subtitle,
  SafeView,
  ButtonContainer,
} from './styles'
import Header from '../../components/Header'
import { KeyboardAvoidingView } from 'react-native'
import LineInput from '../../components/LineInput'
import Icon from 'react-native-vector-icons/Feather'
import SendResetEmailButton from './components/SendResetEmailButton'
import ResetPasswordModal from './components/ResetPasswordModal'
import constraints from './constraints'

const validate = require('validate.js')

export default class ResetPasswordScreen extends Component {
  constructor(props) {
    super(props)
    this.updateState = this.setState.bind(this)
    this.state = {
      email: '',
      showResetPasswordModal: false,
      displayErrors: {},
      errors: {},
      touched: {},
    }
  }

  validateForm = isOnChangeText => {
    const errors = validate(
      {
        email: this.state.email,
      },
      constraints,
    )

    const constructDisplayErrors = () => {
      const displayErrors = {}
      Object.keys(errors || {}).forEach(key => {
        if (this.state.touched[key]) {
          displayErrors[key] = errors[key]
        }
      })
      return displayErrors
    }

    const errorsReduced =
      Object.keys(errors || {}).length <
      Object.keys(this.state.errors || {}).length

    if (!isOnChangeText || (isOnChangeText && errorsReduced)) {
      this.setState({ displayErrors: constructDisplayErrors() })
    }
    this.setState({ errors })
  }

  addTouched = key => {
    const touched = {
      ...this.state.touched,
      [key]: true,
    }
    this.setState({ touched })
  }

  updateEmail = text => {
    this.setState({ email: text })
  }
  toggleEmailAlert = () => {
    this.setState({ emailAlertDisplayed: !this.state.emailAlertDisplayed })
  }
  openModal = () => {
    this.setState({ showResetPasswordModal: true })
  }
  closeModal = () => {
    this.setState({ showResetPasswordModal: false })
  }
  render() {
    const { errors, displayErrors } = this.state
    const noErrors = !errors
    return (
      <ScreenContainer>
        <SafeView>
          <Header
            title="Reset Password"
            showBack
            onBackPress={() => this.props.navigation.goBack()}
          />
          <KeyboardAvoidingView behavior="position" enabled>
            <SubtitleView>
              <Subtitle>
                Enter your email address, and we will send you a token to reset
                your password.
              </Subtitle>
            </SubtitleView>
            <LineInput
              text={this.state.email}
              placeholderText="Email"
              autoCapitalize="none"
              updateText={text => {
                this.setState({ email: text }, () => this.validateForm(true))
              }}
              onFocus={() => this.addTouched('email')}
              onBlur={() => this.validateForm(false)}
              error={displayErrors.email}
            >
              <Icon
                name="mail"
                size={18}
                color="rgb(139, 133, 150)"
                style={{ marginLeft: 8 }}
              />
            </LineInput>
            <ButtonContainer>
              <SendResetEmailButton
                disabled={!noErrors}
                email={this.state.email}
                onPress={() => this.props.navigation.goBack()}
                openModal={this.openModal}
              />
            </ButtonContainer>
          </KeyboardAvoidingView>
        </SafeView>
        <ResetPasswordModal
          isVisible={this.state.showResetPasswordModal}
          email={this.state.email}
          closeModal={this.closeModal}
          navigateToLogin={() => this.props.navigation.navigate('Login')}
        />
      </ScreenContainer>
    )
  }
}
