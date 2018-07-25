import React, { Component } from 'react'
import { Card, Name, Picture } from './styles'

class ListItem extends Component {
  render() {
    const { name, picture } = this.props
    return (
      <Card>
        <Picture source={{ uri: picture }} />
        <Name>{name}</Name>
      </Card>
    )
  }
}

export default ListItem
