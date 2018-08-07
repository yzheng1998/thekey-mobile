import React, { Component } from 'react'
import { Button, ButtonText } from './styles'
import { Alert } from 'react-native'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const SEND_RESET_EMAIL = gql`
  mutation sendResetEmail($email: String!) {
    sendResetEmail(email: $email) {
      email
      error {
        message
      }
    }
  }
`
export default class SendResetEmailButton extends Component {
  render() {
    const { email, disabled, openModal } = this.props
    return (
      <Mutation
        mutation={SEND_RESET_EMAIL}
        onCompleted={openModal}
        onError={error => {
          if (error) {
            Alert.alert(
              'Email failed to send',
              'There was an error sending the email with the token to reset your password. Please try again.',
            )
          }
        }}
      >
        {sendResetEmail => (
          <Button
            disabled={disabled}
            onPress={() => {
              const variables = {
                email,
              }
              sendResetEmail({ variables })
            }}
          >
            <ButtonText>SEND RESET PASSWORD LINK</ButtonText>
          </Button>
        )}
      </Mutation>
    )
  }
}
