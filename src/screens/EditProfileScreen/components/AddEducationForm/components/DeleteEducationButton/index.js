import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { RemoveButton, RemoveButtonText } from '../../styles'

const DELETE_EDUCATION = gql`
  mutation deleteEducation($educationId: ID!) {
    deleteEducation(educationId: $educationId) {
      deletedId
      userId
    }
  }
`
export default class DeleteEducationButton extends Component {
  render() {
    const { id } = this.props
    return (
      <Mutation
        mutation={DELETE_EDUCATION}
        onCompleted={() =>
          this.props.onPress() && this.props.navigation.goBack()
        }
      >
        {deleteEducation => (
          <RemoveButton
            onPress={() => {
              const variables = {
                id,
              }
              deleteEducation({ variables })
            }}
          >
            <RemoveButtonText>REMOVE SCHOOL</RemoveButtonText>
          </RemoveButton>
        )}
      </Mutation>
    )
  }
}
