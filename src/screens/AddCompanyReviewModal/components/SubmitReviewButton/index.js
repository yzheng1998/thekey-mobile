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
const getEmploymentType = selectedIndex => {
  switch (selectedIndex) {
    case 0:
      return 'FULLTIME'
    case 1:
      return 'PARTTIME'
    default:
      return 'INTERNSHIP'
  }
}
export default class SubmitReviewButton extends Component {
  render() {
    const {
      rating,
      title,
      pros,
      cons,
      current,
      jobTitle,
      location,
      acceptedTerms,
      companyId,
      hideAddReview,
      clearState,
    } = this.props

    const lastWorked = this.props.lastWorked.toString()
    const employmentType = getEmploymentType(this.props.employmentType)
    return (
      <Mutation
        mutation={ADD_COMPANY_REVIEW}
        onCompleted={() => {
          hideAddReview()
          clearState()
        }}
      >
        {(addCompanyReview, { error }) => {
          if (error) return <Text>{error.message}</Text>
          return (
            <SubmitButton
              disabled={!acceptedTerms}
              onPress={() => {
                const variables = {
                  addCompanyReviewInput: {
                    rating,
                    title,
                    pros,
                    cons,
                    employmentType,
                    current,
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
