import React, { Component } from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { ModalScreenContainer } from '../../../../../../styles'
import RegisterButton from '../../../../../../../../components/RegisterButton'
import LineInput from '../../../../../../../../components/LineInput'
import {
  KeyboardAwareScrollView,
  Keyboard,
} from 'react-native-keyboard-aware-scroll-view'
import constraints from './constraints'

const validate = require('validate.js')

export default class Password extends Component {
  state = {
    password: '',
    newPassword: '',
    confirmNewPassword: '',
    displayErrors: {},
    errors: {},
    touched: {},
  }

  validateForm = isOnChangeText => {
    const errors = validate(
      {
        newPassword: this.state.newPassword,
        confirmNewPassword: this.state.confirmNewPassword,
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

  render() {
    return (
      <ModalScreenContainer>
        <TouchableWithoutFeedback
          onPress={() => Keyboard.dismiss()}
          accessible={false}
        >
          <KeyboardAwareScrollView>
            <LineInput
              updateText={text => this.setState({ password: text })}
              text={this.state.password}
              placeholderText="Current Password"
              autoCapitalize="none"
              secureTextEntry
            />
            <LineInput
              text={this.state.newPassword}
              placeholderText="New Password (at least 6 characters)"
              autoCapitalize="none"
              secureTextEntry
              updateText={text => {
                this.setState({ newPassword: text }, () =>
                  this.validateForm(true),
                )
              }}
              onFocus={() => this.addTouched('newPassword')}
              onBlur={() => this.validateForm(false)}
              error={this.state.displayErrors.newPassword}
            />
            <LineInput
              text={this.state.confirmNewPassword}
              placeholderText="Confirm New Password"
              autoCapitalize="none"
              secureTextEntry
              updateText={text => {
                this.setState({ confirmNewPassword: text }, () =>
                  this.validateForm(true),
                )
              }}
              onFocus={() => this.addTouched('confirmNewPassword')}
              onBlur={() => this.validateForm(false)}
              error={this.state.displayErrors.confirmNewPassword}
            />
            <RegisterButton buttonText="UPDATE" onPress={this.props.onPress} />
          </KeyboardAwareScrollView>
        </TouchableWithoutFeedback>
      </ModalScreenContainer>
    )
  }
}
