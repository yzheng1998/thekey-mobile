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
import { buttonRadius } from '../../../../../../constants'

export default class InterestsModalHeader extends Component {
  render() {
    const { handleClose, handleCancel, updateTags, tags } = this.props
    return (
      <SafeView>
        <Background>
          <ButtonContainer>
            <CancelButton hitSlop={buttonRadius} onPress={handleCancel}>
              <CancelText>Cancel</CancelText>
            </CancelButton>
            <TouchableOpacity
              hitSlop={buttonRadius}
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
