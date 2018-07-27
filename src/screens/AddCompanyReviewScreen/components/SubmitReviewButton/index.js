import React, { Component } from 'react'
import { SubmitButton, SubmitButtonText } from './styles'
import { Text } from 'react-native'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const ADD_COMPANY_REVIEW = gql`
  mutation addCompanyReview($addCompanyReviewInput: AddCompanyReviewInput!) {
    addCompanyReview(addCompanyReviewInput: $addCompanyReviewInput) {
      companyReview {
        id
        rating
        title
        pros
        cons
        employmentType
        current
        jobTitle
        location
        company {
          id
        }
        lastWorked
        createdAt
      }
      error {
        message
      }
    }
  }
`
export default class SubmitReviewButton extends Component {
  render() {
    // add validation
    return (
      <Mutation
        mutation={ADD_COMPANY_REVIEW}
        onCompleted={() => this.props.navigation.goBack()}
      >
        {(applyToJob, { error }) => {
          if (error) return <Text>(error.message)</Text>
          return (
            <SubmitButton
              onPress={() => {
                const variables = {
                  resume: 'resume',
                  coverLetter: this.props.coverLetter,
                  jobId: this.props.id,
                }
                applyToJob({ variables })
              }}
            >
              <SubmitButtonText>SUBMIT REVIEW</SubmitButtonText>
            </SubmitButton>
          )
        }}
      </Mutation>
    )
  }
}
