import React, { Component } from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'
import { ModalScreenContainer } from '../../../../../../styles'
import RegisterButton from '../../../../../../../../components/RegisterButton'
import LineInput from '../../../../../../../../components/LineInput'
import {
  KeyboardAwareScrollView,
  Keyboard,
} from 'react-native-keyboard-aware-scroll-view'
import constraints from './constraints'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import LoadingWrapper from '../../../../../../../../components/LoadingWrapper'
import { ErrorMessage } from '../../../../../../../../components/Error/styles'

const validate = require('validate.js')

const CHANGE_USER_PASSWORD = gql`
  mutation changeUserPassword($oldPassword: String!, $newPassword: String!) {
    changeUserPassword(oldPassword: $oldPassword, newPassword: $newPassword) {
      updatedUser {
        id
      }
      error {
        message
      }
    }
  }
`

export default class Password extends Component {
  state = {
    password: '',
    newPassword: '',
    confirmNewPassword: '',
    displayErrors: {},
    errors: null,
    touched: {},
    submitError: '',
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
    const noErrors = !this.state.errors
    const variables = {
      oldPassword: this.state.password,
      newPassword: this.state.newPassword,
    }
    return (
      <ModalScreenContainer>
        <TouchableWithoutFeedback
          onPress={() => Keyboard.dismiss()}
          accessible={false}
        >
          <KeyboardAwareScrollView
            style={{ paddingLeft: 12, paddingRight: 12, paddingTop: 6 }}
          >
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
            <Mutation
              mutation={CHANGE_USER_PASSWORD}
              onCompleted={data => {
                if (data.changeUserPassword.error)
                  this.setState({
                    submitError: data.changeUserPassword.error.message,
                  })
                else {
                  this.props.onPress()
                  this.setState({
                    password: '',
                    newPassword: '',
                    confirmNewPassword: '',
                    displayErrors: {},
                    errors: null,
                    touched: {},
                    submitError: '',
                  })
                }
              }}
            >
              {(changeUserPassword, { loading }) => (
                <View>
                  <RegisterButton
                    buttonText="UPDATE"
                    disabled={!noErrors}
                    onPress={() => {
                      changeUserPassword({ variables })
                    }}
                  />
                  <LoadingWrapper loading={loading} />
                  {this.state.submitError.length > 0 && (
                    <View style={{ alignItems: 'center' }}>
                      <ErrorMessage>{this.state.submitError}</ErrorMessage>
                    </View>
                  )}
                </View>
              )}
            </Mutation>
          </KeyboardAwareScrollView>
        </TouchableWithoutFeedback>
      </ModalScreenContainer>
    )
  }
}
