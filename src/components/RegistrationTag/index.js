import React, { Component } from 'react'
import { Tag, TagText } from './styles'

class RegistrationTag extends Component {
  render() {
    const { name, selected, disable, onPress } = this.props
    return (
      <Tag disabled={disable} onPress={() => onPress(name)} color={selected}>
        <TagText>{name}</TagText>
      </Tag>
    )
  }
}

export default RegistrationTag
