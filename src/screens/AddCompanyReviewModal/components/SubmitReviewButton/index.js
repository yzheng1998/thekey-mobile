import React, { Component } from 'react'
import { SubmitButton, SubmitButtonText } from './styles'
import { Alert } from 'react-native'
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
    const {
      state,
      hideAddReview,
      clearState,
      disabled,
      refetchReviews,
      refetchCompanies,
    } = this.props
    const {
      rating,
      reviewTitle,
      reviewPros,
      reviewCons,
      isCurrentEmployee,
      jobTitle,
      location,
      companyId,
      yearLastWorked,
      employmentType,
    } = state
    const lastWorked = yearLastWorked.toString()
    return (
      <Mutation
        mutation={ADD_COMPANY_REVIEW}
        onCompleted={() => {
          hideAddReview()
          clearState()
          refetchReviews()
          if (refetchCompanies) refetchCompanies()
        }}
        key={companyId}
      >
        {(addCompanyReview, { error }) => {
          if (error) {
            Alert.alert(
              'Review Submission Failed',
              'There was an error submitting your review. Please try again.',
              [{ text: 'OK', onPress: () => {} }],
              { cancelable: true },
            )
          }

          return (
            <SubmitButton
              disabled={disabled}
              onPress={() => {
                const variables = {
                  addCompanyReviewInput: {
                    rating,
                    title: reviewTitle,
                    pros: reviewPros,
                    cons: reviewCons,
                    employmentType,
                    current: isCurrentEmployee,
                    jobTitle,
                    location,
                    companyId,
                    lastWorked,
                  },
                }
                addCompanyReview({ variables })
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
