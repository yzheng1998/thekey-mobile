import gql from 'graphql-tag'

export const SEND_INVITATION = gql`
  mutation sendInvitation {
    sendInvitation {
      inviteCount
    }
  }
`
