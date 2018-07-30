import React, { Component } from 'react'
import {
  Background,
  Heading,
  ButtonContainer,
  CancelButton,
  CancelText,
  SafeView,
} from './styles'
import UpdateProfileButton from '../UpdateProfileButton'

export default class EditProfileHeader extends Component {
  render() {
    const { goBack, mutationVariables } = this.props
    return (
      <SafeView>
        <Background>
          <ButtonContainer>
            <CancelButton onPress={goBack}>
              <CancelText>Cancel</CancelText>
            </CancelButton>
            <UpdateProfileButton
              variables={mutationVariables}
              goBack={goBack}
            />
          </ButtonContainer>
          <Heading>Edit Profile</Heading>
        </Background>
      </SafeView>
    )
  }
}
