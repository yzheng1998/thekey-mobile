import React, { Component } from 'react'
import { PickerContainer, TextField } from './styles'

export default class RegistrationPicker extends Component {
  render() {
    const { placeholderText, text, onPress, selected } = this.props
    return (
      <PickerContainer activeOpacity={1} onPress={onPress} selected={selected}>
        {text === '' && <TextField placeholder>{placeholderText}</TextField>}
        {text !== '' && <TextField>{text}</TextField>}
      </PickerContainer>
    )
  }
}
