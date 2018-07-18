import React, { Component } from 'react'
import { SubmitButton, SubmitButtonText } from './styles'

export default class SubmitReviewButton extends Component {
  render() {
    // add validation
    return (
      <SubmitButton>
        <SubmitButtonText>SUBMIT REVIEW</SubmitButtonText>
      </SubmitButton>
    )
  }
}
