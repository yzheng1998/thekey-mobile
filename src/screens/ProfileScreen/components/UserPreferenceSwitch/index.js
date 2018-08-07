import React, { Component } from 'react'
import Switch from 'react-native-switch-pro'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const UPDATE_USER_PREFERENCES = gql`
  mutation updateUserPreferences(
    $updateUserPreferencesInput: UpdateUserPreferencesInput!
  ) {
    updateUserPreferences(
      updateUserPreferencesInput: $updateUserPreferencesInput
    ) {
      updatedUser {
        id
        settings {
          emailPreferences
          newsLetterPreferences
        }
      }
      error {
        message
      }
    }
  }
`

export default class UserPreferenceSwitch extends Component {
  render() {
    const { selected, settingName } = this.props
    return (
      <Mutation mutation={UPDATE_USER_PREFERENCES}>
        {updateUserPreferences => (
          <Switch
            backgroundActive="rgb(250,53,121)"
            value={selected}
            onSyncPress={value => {
              const variables = {
                updateUserPreferencesInput: {
                  [settingName]: value,
                },
              }
              updateUserPreferences({ variables })
            }}
          />
        )}
      </Mutation>
    )
  }
}
