import React, { Component } from 'react'
import { RowContainer, Title, Input } from '../../styles'

export default class HorizontalEditField extends Component {
  render() {
    const { title, onChangeText, value, disabled } = this.props
    return (
      <RowContainer>
        <Title>{title}</Title>
        <Input
          editable={!disabled}
          defaultValue={value}
          onChangeText={onChangeText}
        />
      </RowContainer>
    )
  }
}
