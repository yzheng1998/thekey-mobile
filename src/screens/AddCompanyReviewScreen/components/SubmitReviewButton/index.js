import React, { Component } from 'react'
import { SubmitButton, SubmitButtonText } from './styles'
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
      <SubmitButton>
        <SubmitButtonText>SUBMIT REVIEW</SubmitButtonText>
      </SubmitButton>
    )
  }
}
