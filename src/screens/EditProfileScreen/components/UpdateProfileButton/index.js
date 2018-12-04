import React, { Component } from 'react'
import { Button, Text } from './styles'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      updatedUser {
        id
        bio
      }
      error {
        message
      }
    }
  }
`

export default class UpdateProfileButton extends Component {
  render() {
    const { variables, goBack, refreshData } = this.props
    return (
      <Mutation
        mutation={UPDATE_USER}
        variables={variables}
        onCompleted={() => {
          goBack()
          refreshData()
        }}
      >
        {updateUser => (
          <Button
            onPress={() => {
              updateUser(variables)
            }}
          >
            <Text>Save</Text>
          </Button>
        )}
      </Mutation>
    )
  }
}
