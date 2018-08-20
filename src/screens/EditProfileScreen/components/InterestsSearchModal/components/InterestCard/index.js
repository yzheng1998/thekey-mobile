import React, { Component } from 'react'
import { Card, Title } from './styles'
import { TouchableOpacity } from 'react-native'
import PlusIcon from 'react-native-vector-icons/Feather'

export default class InterestCard extends Component {
  render() {
    const { title, onPress } = this.props
    return (
      <TouchableOpacity onPress={onPress}>
        <Card>
          <Title>{title}</Title>
          <PlusIcon name="plus-circle" color="rgb(220, 60, 53)" size={20} />
        </Card>
      </TouchableOpacity>
    )
  }
}
