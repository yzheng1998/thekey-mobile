import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { AddButton, AddButtonText } from '../../styles'

const UPDATE_EXPERIENCE = gql`
  mutation updateExperience($updateExperienceInput: UpdateExperienceInput!) {
    updateExperience(updateExperienceInput: $updateExperienceInput) {
      experience {
        employer
        position
        startDate
        endDate
      }
    }
  }
`
export default class UpdateExperienceButton extends Component {
  render() {
    const { id, employer, position, startDate, endDate, disabled } = this.props
    return (
      <Mutation
        mutation={UPDATE_EXPERIENCE}
        onCompleted={() =>
          this.props.refreshUpdateExperience() && this.props.navigation.goBack()
        }
      >
        {updateExperience => (
          <AddButton
            disabled={disabled}
            onPress={() => {
              const variables = {
                updateExperienceInput: {
                  id,
                  employer,
                  position,
                  startDate: new Date(startDate),
                  endDate: new Date(endDate),
                },
              }
              updateExperience({ variables })
            }}
          >
            <AddButtonText>UPDATE WORK EXPERIENCE</AddButtonText>
          </AddButton>
        )}
      </Mutation>
    )
  }
}
