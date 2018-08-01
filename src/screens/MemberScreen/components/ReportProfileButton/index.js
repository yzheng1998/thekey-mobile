import React, { Component } from 'react'
import { SubmitButton, SubmitButtonText } from './styles'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { Alert } from 'react-native'

const REPORT_USER = gql`
  mutation reportUser($reportUserInput: ReportUserInput!) {
    reportUser(reportUserInput: $reportUserInput) {
      message
      error {
        message
      }
    }
  }
`

export default class ReportProfileButton extends Component {
  render() {
    const {
      disabled,
      closeModal,
      clearResponse,
      message,
      reportedUserId,
    } = this.props
    return (
      <Mutation
        mutation={REPORT_USER}
        onCompleted={() => {
          closeModal()
          clearResponse()
        }}
      >
        {(reportUser, { error }) => {
          if (error) {
            Alert.alert(
              'Error Reporting User',
              'There was an error reporting this user. Please try again.',
              [
                {
                  text: 'OK',
                  onPress: () => null,
                },
              ],
              { cancelable: false },
            )
          }
          return (
            <SubmitButton
              disabled={disabled}
              onPress={() => {
                const variables = {
                  reportUserInput: {
                    reportedUserId,
                    message,
                  },
                }
                reportUser({ variables })
              }}
            >
              <SubmitButtonText>SEND FEEDBACK</SubmitButtonText>
            </SubmitButton>
          )
        }}
      </Mutation>
    )
  }
}
