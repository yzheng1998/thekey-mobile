import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import {
  Background,
  Heading,
  ButtonContainer,
  CancelButton,
  CancelText,
  SafeView,
  DoneText,
} from './styles'

export default class InterestsModalHeader extends Component {
  render() {
    const {
      handleClose,
      updateInterests,
      interests,
      doneButtonDisabled,
    } = this.props
    return (
      <SafeView>
        <Background>
          <ButtonContainer>
            <CancelButton onPress={handleClose}>
              <CancelText>Cancel</CancelText>
            </CancelButton>
            <TouchableOpacity
              disabled={doneButtonDisabled}
              onPress={() => {
                updateInterests(interests)
                handleClose()
              }}
            >
              <DoneText disabled={doneButtonDisabled}>Done</DoneText>
            </TouchableOpacity>
          </ButtonContainer>
          <Heading>Add Interests</Heading>
        </Background>
      </SafeView>
    )
  }
}
