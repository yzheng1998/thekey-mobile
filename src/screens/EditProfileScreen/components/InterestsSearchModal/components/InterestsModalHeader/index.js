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
    const { handleClose, handleCancel, updateTags, tags } = this.props
    return (
      <SafeView>
        <Background>
          <ButtonContainer>
            <CancelButton onPress={handleCancel}>
              <CancelText>Cancel</CancelText>
            </CancelButton>
            <TouchableOpacity
              onPress={() => {
                updateTags(tags)
                handleClose()
              }}
            >
              <DoneText>Done</DoneText>
            </TouchableOpacity>
          </ButtonContainer>
          <Heading>Add Interests</Heading>
        </Background>
      </SafeView>
    )
  }
}
