import React, { Component } from 'react'
import { Card, Title } from './styles'
import { TouchableOpacity } from 'react-native'

export default class InterestCard extends Component {
  render() {
    const { title, onPress } = this.props
    return (
      <TouchableOpacity onPress={onPress}>
        <Card>
          <Title>{title}</Title>
        </Card>
      </TouchableOpacity>
    )
  }
}
