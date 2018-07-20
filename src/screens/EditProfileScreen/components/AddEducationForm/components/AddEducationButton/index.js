import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { AddButton, AddButtonText } from '../../styles'

const ADD_EDUCATION = gql`
  mutation addEducation($addEducationInput: AddEducationInput!) {
    addEducation(addEducationInput: $addEducationInput) {
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
export default class AddEducationButton extends Component {
  render() {
    const {
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
        mutation={ADD_EDUCATION}
        onCompleted={() =>
          this.props.refreshAddEducation() && this.props.navigation.goBack()
        }
      >
        {addEducation => (
          <AddButton
            disabled={disabled}
            onPress={() => {
              const variables = {
                addEducationInput: {
                  schoolType,
                  schoolName,
                  degreeType,
                  major,
                  startYear,
                  endYear,
                },
              }
              addEducation({ variables })
            }}
          >
            <AddButtonText>ADD SCHOOL</AddButtonText>
          </AddButton>
        )}
      </Mutation>
    )
  }
}
