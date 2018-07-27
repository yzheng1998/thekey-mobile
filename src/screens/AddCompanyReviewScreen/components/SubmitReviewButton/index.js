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
  getEmploymentType = selectedIndex => {
    switch (selectedIndex) {
      case 0:
        return 'FULLTIME'
      case 1:
        return 'PARTTIME'
      default:
        return 'INTERNSHIP'
    }
  }
  render() {
    // add validation
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
    } = this.props
    console.log('accepted terms', acceptedTerms)
    const employmentType = this.getEmploymentType(this.props.employmentType)
    const lastWorked = this.props.lastWorked.toString()
    return (
      <Mutation
        mutation={ADD_COMPANY_REVIEW}
        onCompleted={() => this.props.navigation.goBack()}
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
                console.log('variables', variables)
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
