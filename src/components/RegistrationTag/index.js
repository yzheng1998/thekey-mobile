import React, { Component } from 'react'
import { Tag, TagText } from './styles'

class RegistrationTag extends Component {
  constructor(props) {
    super(props)
    this.state = { active: false }
  }
  render() {
    const { name } = this.props
    return (
      <Tag
        onPress={() => this.setState({ active: !this.state.active })}
        color={this.state.active}
      >
        <TagText>{name}</TagText>
      </Tag>
    )
  }
}

export default RegistrationTag
