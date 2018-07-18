import React, { Component } from 'react'
import { Tag, TagText } from './styles'

class RegistrationTag extends Component {
  constructor(props) {
    super(props)
    this.state = { active: false }
  }
  render() {
    const { name, index, selected, currentFunction } = this.props
    return (
      <Tag onPress={() => currentFunction(name, index)} color={selected}>
        <TagText>{name}</TagText>
      </Tag>
    )
  }
}

export default RegistrationTag
