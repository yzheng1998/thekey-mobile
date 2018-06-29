import React, { Component } from 'react'
import { RowContainer, Title, Content } from '../../styles'

export default class HorizontalEditField extends Component {
  render() {
    const { title, onChangeText, value } = this.props
    return (
      <RowContainer>
        <Title>{title}</Title>
        <Content defaultValue={value} onChangeText={onChangeText} />
      </RowContainer>
    )
  }
}
