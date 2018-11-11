import gql from 'graphql-tag'

export const SEND_VERIFICATION = gql`
  mutation sendVerification($email: String) {
    sendVerification(email: $email) {
      verificationCode
      error {
        message
      }
    }
  }
`
