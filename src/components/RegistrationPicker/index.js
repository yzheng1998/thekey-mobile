import React, { Component } from 'react'
import { Container, PickerContainer, TextField, Title } from './styles'
import Error from '../../components/Error'

export default class RegistrationPicker extends Component {
  render() {
    const {
      title,
      placeholderText,
      text,
      onPress,
      selected,
      error,
      disabled,
      children,
      width,
    } = this.props
    return (
      <Container width={width}>
        {title && <Title>{title}</Title>}
        <PickerContainer
          disabled={disabled}
          activeOpacity={1}
          onPress={onPress}
          selected={selected}
        >
          {children}
          {text === '' && <TextField placeholder>{placeholderText}</TextField>}
          {text !== '' && <TextField>{text}</TextField>}
        </PickerContainer>
        <Error error={error} />
      </Container>
    )
  }
}
