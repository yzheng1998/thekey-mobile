import React, { Component } from 'react'
import { SubmitButton, SubmitButtonText } from './styles'

export default class ReportProfileButton extends Component {
  render() {
    const { disabled } = this.props
    return (
      <SubmitButton disabled={disabled}>
        <SubmitButtonText>SEND FEEDBACK</SubmitButtonText>
      </SubmitButton>
    )
  }
}
