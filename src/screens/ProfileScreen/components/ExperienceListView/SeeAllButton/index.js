import React, { Component } from 'react'
import { Button, ButtonText } from './styles'

export default class SeeAllButton extends Component {
  render() {
    return (
      <Button onPress={this.props.onPress} activeOpacity={0.5}>
        <ButtonText>
          {this.props.truncated ? 'SEE ALL' : 'SHOW LESS'}
        </ButtonText>
      </Button>
    )
  }
}
