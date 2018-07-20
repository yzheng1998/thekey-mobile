import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { AddButton, AddButtonText } from '../../styles'

const ADD_EXPERIENCE = gql`
  mutation addExperience($addExperienceInput: AddExperienceInput!) {
    addExperience(addExperienceInput: $addExperienceInput) {
      experience {
        employer
        position
        startDate
        endDate
      }
    }
  }
`
export default class AddExperienceButton extends Component {
  render() {
    const { employer, position, startDate, endDate, disabled } = this.props
    return (
      <Mutation
        mutation={ADD_EXPERIENCE}
        onCompleted={() =>
          this.props.refreshAddExperience() && this.props.navigation.goBack()
        }
      >
        {addExperience => (
          <AddButton
            disabled={disabled}
            onPress={() => {
              const variables = {
                addExperienceInput: {
                  employer,
                  position,
                  startDate,
                  endDate,
                },
              }
              addExperience({ variables })
            }}
          >
            <AddButtonText>ADD WORK EXPERIENCE</AddButtonText>
          </AddButton>
        )}
      </Mutation>
    )
  }
}
