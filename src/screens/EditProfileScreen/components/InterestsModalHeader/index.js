import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import {
  Background,
  Heading,
  ButtonContainer,
  CancelButton,
  CancelText,
  SafeView,
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
                console.log('interests in header', interests)
                updateInterests(interests)
                handleClose()
              }}
            >
              <Text>Done</Text>
            </TouchableOpacity>
          </ButtonContainer>
          <Heading>Add Interests</Heading>
        </Background>
      </SafeView>
    )
  }
}
