import React, { Component } from 'react'
import { Button, Text } from './styles'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      email
      linkedIn
      facebook
      twitter
      profilePicture
      lookingFor
      bio
      hometown
      tags {
        id
        name
      }
      preferredWaysToMeet {
        id
      }
    }
  }
`

export default class UpdateProfileButton extends Component {
  render() {
    const { variables, goBack } = this.props
    return (
      <Mutation mutation={UPDATE_USER} onCompleted={() => goBack}>
        {updateUser => (
          <Button
            onPress={() => {
              updateUser({ variables })
            }}
          >
            <Text>Save</Text>
          </Button>
        )}
      </Mutation>
    )
  }
}
