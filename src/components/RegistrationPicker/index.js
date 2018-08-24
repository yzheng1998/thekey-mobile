import React, { Component } from 'react'
import { Container, PickerContainer, TextField } from './styles'
import Error from '../../components/Error'

export default class RegistrationPicker extends Component {
  render() {
    const {
      placeholderText,
      text,
      onPress,
      selected,
      error,
      disabled,
    } = this.props
    return (
      <Container>
        <PickerContainer
          disabled={disabled}
          activeOpacity={1}
          onPress={onPress}
          selected={selected}
        >
          {text === '' && <TextField placeholder>{placeholderText}</TextField>}
          {text !== '' && <TextField>{text}</TextField>}
        </PickerContainer>
        <Error error={error} />
      </Container>
    )
  }
}
