import React, { Component } from 'react'
import { Card, Name, Picture } from './styles'

class ListItem extends Component {
  render() {
    const { id, name, picture, navigate } = this.props
    return (
      <Card onPress={() => navigate(id)}>
        <Picture source={{ uri: picture }} />
        <Name>{name}</Name>
      </Card>
    )
  }
}

export default ListItem
