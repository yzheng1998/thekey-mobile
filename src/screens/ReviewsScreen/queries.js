import gql from 'graphql-tag'

export const GET_REVIEWABLE_COMPANIES = gql`
  query reviewableCompanies(
    $reviewableCompanyFilterInput: ReviewableCompanyFilterInput!
    $offset: Int
    $limit: Int
  ) {
    reviewableCompanies(
      reviewableCompanyFilterInput: $reviewableCompanyFilterInput
      offset: $offset
      limit: $limit
    ) {
      nodes {
        id
        name
        image
        sector
        rating
        reviews {
          totalCount
        }
      }
      pageInfo {
        offset
        limit
      }
    }
  }
`
