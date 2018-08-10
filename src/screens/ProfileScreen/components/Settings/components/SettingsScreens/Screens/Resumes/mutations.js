import gql from 'graphql-tag'

export const SET_RESUMES = gql`
  mutation setResumes($setResumesInput: [ResumeInput!]!) {
    setResumes(setResumesInput: $setResumesInput) {
      user {
        resumes {
          id
          resume
          title
          dataSize
        }
      }
      error {
        message
      }
    }
  }
`
