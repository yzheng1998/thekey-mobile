import React, { Component } from 'react'
import { Alert } from 'react-native'
import { Button, Placeholder } from '../styles'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const SEND_APPLICATION = gql`
  mutation applyToJob($resume: String!, $coverLetter: String!, $jobId: ID!) {
    applyToJob(
      applicationInput: {
        resume: $resume
        coverLetter: $coverLetter
        jobId: $jobId
      }
    ) {
      application {
        id
        resume
        coverLetter
        applicant {
          id
        }
        job {
          id
        }
      }
      error {
        message
      }
    }
  }
`

export default class ApplyButton extends Component {
  render() {
    const {
      toggleApplyModal,
      coverLetter,
      id,
      clearContent,
      refreshPage,
    } = this.props
    return (
      <Mutation
        mutation={SEND_APPLICATION}
        onCompleted={() => {
          toggleApplyModal()
          refreshPage()
        }}
      >
        {(applyToJob, { error }) => {
          if (error) {
            Alert.alert(
              'Failed to submit application',
              'There was an error submitting your application. Please try again.',
              [{ text: 'OK', onPress: () => {} }],
              { cancelable: true },
            )
          }
          return (
            <Button
              onPress={() => {
                const variables = {
                  resume: 'resume',
                  coverLetter,
                  jobId: id,
                }
                applyToJob({ variables })
                clearContent()
              }}
            >
              <Placeholder>SEND APPLICATION</Placeholder>
            </Button>
          )
        }}
      </Mutation>
    )
  }
}
