import React, { Component } from 'react'
import { ContainerRow, Container, Number } from './styles'

export default class VerificationRow extends Component {
  focusNextField(nextField) {
    this[nextField].focus()
  }
  render() {
    const { onChangeText, onSubmit } = this.props
    return (
      <ContainerRow>
        <Container>
          <Number
            autoFocus
            returnKeyType="next"
            onChangeText={text => {
              onChangeText({ code1: text })
              if (text) this.secondInput.focus()
            }}
            maxLength={1}
          />
        </Container>
        <Container>
          <Number
            returnKeyType="next"
            maxLength={1}
            innerRef={input => {
              this.secondInput = input
            }}
            onChangeText={text => {
              onChangeText({ code2: text })
              if (text) this.thirdInput.focus()
            }}
          />
        </Container>
        <Container>
          <Number
            returnKeyType="next"
            maxLength={1}
            innerRef={input => {
              this.thirdInput = input
            }}
            onChangeText={text => {
              onChangeText({ code3: text })
              if (text) this.fourthInput.focus()
            }}
          />
        </Container>
        <Container>
          <Number
            returnKeyType="done"
            maxLength={1}
            innerRef={input => {
              this.fourthInput = input
            }}
            onChangeText={text => {
              onChangeText({ code4: text })
              if (text) onSubmit()
            }}
          />
        </Container>
      </ContainerRow>
    )
  }
}
