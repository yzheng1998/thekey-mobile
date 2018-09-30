import gql from 'graphql-tag'

export const GET_REVIEWABLE_COMPANIES = gql`
  query reviewableCompanies(
    $reviewableCompanyFilterInput: ReviewableCompanyFilterInput!
  ) {
    reviewableCompanies(
      reviewableCompanyFilterInput: $reviewableCompanyFilterInput
    ) {
      id
      name
      image
      sector
      rating
      reviews {
        id
        rating
        title
        pros
        cons
        employmentType
        current
        jobTitle
        location
        lastWorked
        createdAt
      }
    }
  }
`

export const CREATE_REVIEWABLE_COMPANY = gql`
  mutation createReviewableCompany($companyName: String!) {
    createReviewableCompany(companyName: $companyName) {
      reviewableCompany {
        id
        name
      }
    }
  }
`
