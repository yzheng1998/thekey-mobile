import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import QRCode from 'react-native-qrcode'

const GET_USERID = gql`
  query viewer {
    viewer {
      ... on User {
        id
      }
    }
  }
`
export default class QRCodeGenerator extends Component {
  render() {
    return (
      <Query query={GET_USERID}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...'
          if (error) return `Error! ${error.message}`
          return (
            <QRCode
              value={data.viewer.id}
              size={200}
              bgColor="black"
              fgColor="white"
            />
          )
        }}
      </Query>
    )
  }
}
