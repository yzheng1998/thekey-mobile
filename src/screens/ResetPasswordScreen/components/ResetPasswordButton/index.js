import React, { Component } from 'react'
import { Button, ButtonText } from './styles'
import { Alert } from 'react-native'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const RESET_PASSWORD = gql`
  mutation resetPassword($resetPasswordInput: ResetPasswordInput!) {
    resetPassword(resetPasswordInput: $resetPasswordInput) {
      updatedUser {
        id
      }
      error {
        message
      }
    }
  }
`

export default class ResetPasswordButton extends Component {
  render() {
    const {
      email,
      disabled,
      closeModal,
      password,
      token,
      clearContent,
      navigateToLogin,
    } = this.props
    return (
      <Mutation
        mutation={RESET_PASSWORD}
        onCompleted={data => {
          if (data.resetPassword.error) {
            Alert.alert(
              'Failed to reset password',
              data.resetPassword.error.message,
            )
            return null
          }
          clearContent()
          closeModal()
          navigateToLogin()
          return null
        }}
      >
        {resetPassword => (
          <Button
            disabled={disabled}
            onPress={() => {
              const variables = {
                resetPasswordInput: {
                  email,
                  pwResetToken: token.trim(),
                  newPassword: password,
                },
              }
              resetPassword({ variables })
            }}
          >
            <ButtonText>SUBMIT</ButtonText>
          </Button>
        )}
      </Mutation>
    )
  }
}
