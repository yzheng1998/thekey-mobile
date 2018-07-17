import React, { Component } from 'react'
import { Tag, TagText } from './styles'

class RegistrationTag extends Component {
  constructor(props) {
    super(props)
    this.state = { active: false }
  }
  render() {
    const { name, index, selected, onSelect, onDeselect } = this.props
    const currentFunction = selected ? onDeselect : onSelect
    return (
      <Tag onPress={() => currentFunction(name, index)} color={selected}>
        <TagText>{name}</TagText>
      </Tag>
    )
  }
}

export default RegistrationTag
