import React, { Component } from 'react'
import { Button, Text } from './styles'

export default class CreateChatButton extends Component {
  render() {
    const { onPress } = this.props
    return (
      <Button onPress={onPress}>
        <Text>Next</Text>
      </Button>
    )
  }
}
