import React, { Component } from 'react'
import gql from 'graphql-tag'

const GET_USERS = gql`
  query users {
    users {
      id
      firstName
      lastName
      email
    }
  }
`

class getUsers extends Component {
  render() {
    return(
      <div>
        <Query query = {GET_USERS}>
        {({ loading, error, data }) => {
           if (loading) return 'Loading...'
           if (error) return `Error! ${error.message}`
           data.users.map(user => (
             <div>{user.id}</div>
           ))
        }
      }
      </div>
    )
  }
}
