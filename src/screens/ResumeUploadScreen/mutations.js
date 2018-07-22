import gql from 'graphql-tag'

export const SEND_MEMBERSHIP_APPLICATION = gql`
  mutation sendMembershipApplication(
    $sendMembershipApplicationInput: SendMembershipApplicationInput!
  ) {
    sendMembershipApplication(
      sendMembershipApplicationInput: $sendMembershipApplicationInput
    ) {
      application {
        id
        firstName
        lastName
      }
    }
  }
`
