import React, { Component } from 'react'
import {
  Background,
  Heading,
  ButtonContainer,
  CancelButton,
  CancelText,
  SafeView,
  Divider,
} from './styles'
import UpdateProfileButton from '../UpdateProfileButton'
import { buttonRadius } from '../../../../constants'

export default class EditProfileHeader extends Component {
  render() {
    const { goBack, mutationVariables, refreshData } = this.props
    return (
      <SafeView>
        <Background>
          <ButtonContainer>
            <CancelButton hitSlop={buttonRadius} onPress={goBack}>
              <CancelText>Cancel</CancelText>
            </CancelButton>
            <Heading>Edit Profile</Heading>
            <UpdateProfileButton
              variables={mutationVariables}
              goBack={goBack}
              refreshData={refreshData}
            />
          </ButtonContainer>
        </Background>
        <Divider />
      </SafeView>
    )
  }
}
