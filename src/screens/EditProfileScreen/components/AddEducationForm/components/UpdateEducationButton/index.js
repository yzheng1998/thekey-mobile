import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { AddButton, AddButtonText } from '../../styles'

const UPDATE_EDUCATION = gql`
  mutation updateEducation($updateEducationInput: UpdateEducationInput!) {
    updateEducation(updateEducationInput: $updateEducationInput) {
      education {
        schoolType
        schoolName
        degreeType
        major
        startYear
        endYear
      }
    }
  }
`
export default class UpdateEducationButton extends Component {
  render() {
    const {
      id,
      schoolType,
      schoolName,
      degreeType,
      major,
      startYear,
      endYear,
      disabled,
    } = this.props
    return (
      <Mutation
        mutation={UPDATE_EDUCATION}
        onCompleted={() =>
          this.props.refreshEditProfile() && this.props.navigation.goBack()
        }
      >
        {updateEducation => (
          <AddButton
            disabled={disabled}
            onPress={() => {
              const variables = {
                updateEducationInput: {
                  id,
                  schoolType,
                  schoolName,
                  degreeType,
                  major,
                  startYear,
                  endYear,
                },
              }
              updateEducation({ variables })
            }}
          >
            <AddButtonText>UPDATE SCHOOL</AddButtonText>
          </AddButton>
        )}
      </Mutation>
    )
  }
}
