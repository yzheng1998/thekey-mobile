import gql from 'graphql-tag'

export const GET_JOBS = gql`
  query jobs($jobsFilterInput: JobsFilterInput!, $offset: Int, $limit: Int) {
    jobs(jobsFilterInput: $jobsFilterInput, offset: $offset, limit: $limit) {
      nodes {
        id
        title
        description
        picture
        location
        commitment
        deadline
        tags {
          name
        }
        isInterested
        hasApplied
      }
      totalCount
      pageInfo {
        offset
        limit
      }
    }
  }
`
