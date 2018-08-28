import React, { Component } from 'react'
import { Screen } from './styles'
import RegisterButton from '../../../../components/RegisterButton'
import LineInput from '../../../../components/LineInput'
import constraints from './constraints'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { Keyboard } from 'react-native'

const SEND_INVITATION = gql`
  mutation sendInvitation($recipientEmail: String) {
    sendInvitation(recipientEmail: $recipientEmail) {
      recipientEmail
    }
  }
`

const validate = require('validate.js')

export default class InviteFriend extends Component {
  state = {
    email: '',
    displayErrors: {},
    errors: {},
    touched: {},
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

  updateEmail = text =>
    this.setState({ email: text }, () => this.validateForm(true))

  render() {
    const { email, errors, displayErrors } = this.state
    const noErrors = !errors
    return (
      <Mutation mutation={SEND_INVITATION} onCompleted={this.props.closeModal}>
        {sendInvitation => (
          <Screen>
            <LineInput
              placeholderText="Your friend's email"
              text={email}
              updateText={this.updateEmail}
              autoCapitalize="none"
              onFocus={() => this.addTouched('email')}
              onBlur={() => this.validateForm(false)}
              error={displayErrors.email}
            />
            <RegisterButton
              onPress={() => {
                const variables = { recipientEmail: this.state.email }
                sendInvitation({ variables })
                Keyboard.dismiss()
              }}
              secondary
              noBorder
              disabled={!noErrors}
              buttonText="INVITE YOUR FRIEND"
            />
          </Screen>
        )}
      </Mutation>
    )
  }
}
