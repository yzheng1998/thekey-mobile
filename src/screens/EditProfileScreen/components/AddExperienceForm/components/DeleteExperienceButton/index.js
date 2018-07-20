import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { RemoveButton, RemoveButtonText } from '../../styles'

const DELETE_EXPERIENCE = gql`
  mutation deleteExperience($experienceId: ID!) {
    deleteExperience(experienceId: $experienceId) {
      deletedId
      userId
    }
  }
`
export default class DeleteExperienceButton extends Component {
  render() {
    const { id } = this.props
    return (
      <Mutation
        mutation={DELETE_EXPERIENCE}
        onCompleted={() =>
          this.props.refreshDeleteExperience() && this.props.navigation.goBack()
        }
      >
        {deleteExperience => (
          <RemoveButton
            onPress={() => {
              const variables = {
                experienceId: id,
              }
              deleteExperience({ variables })
            }}
          >
            <RemoveButtonText>REMOVE WORK EXPERIENCE</RemoveButtonText>
          </RemoveButton>
        )}
      </Mutation>
    )
  }
}
