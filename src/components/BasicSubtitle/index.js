import React, { Component } from 'react'
import { Container, Subtitle } from './styles'

export default class BasicSubtitle extends Component {
  render() {
    return (
      <Container>
        <Subtitle style={this.props.style}>
          {this.props.children || this.props.text}
        </Subtitle>
      </Container>
    )
  }
}
