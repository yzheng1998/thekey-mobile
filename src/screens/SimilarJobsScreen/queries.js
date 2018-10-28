import gql from 'graphql-tag'

export const SIMILAR_JOBS = gql`
  query similarJobs($id: ID!, $offset: Int, $limit: Int) {
    similarJobs(id: $id, offset: $offset, limit: $limit) {
      nodes {
        id
        title
        description
        picture
        experience
        location
        deadline
        commitment
        tags {
          name
        }
        isInterested
      }
      totalCount
      pageInfo {
        offset
        limit
      }
    }
  }
`
