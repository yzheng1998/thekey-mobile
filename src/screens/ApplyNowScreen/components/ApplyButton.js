import React, { Component } from 'react'
import { Text } from 'react-native'
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
    return (
      <Mutation
        mutation={SEND_APPLICATION}
        onCompleted={() => this.props.navigation.goBack()}
      >
        {(applyToJob, { error }) => {
          if (error) return <Text>(error.message)</Text>
          return (
            <Button
              onPress={() => {
                const variables = {
                  resume: 'resume',
                  coverLetter: this.props.coverLetter,
                  jobId: this.props.id,
                }
                applyToJob({ variables })
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
