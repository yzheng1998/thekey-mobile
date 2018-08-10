import gql from 'graphql-tag'

export const UPLOAD_RESUME = gql`
  mutation uploadResume($uploadResumeInput: ResumeInput!) {
    uploadResume(uploadResumeInput: $uploadResumeInput) {
      resume {
        id
        resume
        title
        dataSize
      }
      error {
        message
      }
    }
  }
`
