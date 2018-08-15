import React, { Component } from 'react'
import { RowContainer, Title, Input, Text } from '../../styles'

export default class HorizontalEditField extends Component {
  render() {
    const { title, onChangeText, value, disabled, onPress } = this.props
    return (
      <RowContainer>
        <Title>{title}</Title>
        {onPress ? (
          <Text onPress={onPress}>{value}</Text>
        ) : (
          <Input
            editable={!disabled}
            defaultValue={value}
            onChangeText={onChangeText}
          />
        )}
      </RowContainer>
    )
  }
}
