import React, { Component } from 'react'
import { EmptyBar, FilledBar } from './styles'

class RegistrationProgressBar extends Component {
  render() {
    const { progress } = this.props
    return (
      <EmptyBar>
        <FilledBar progress={progress} />
      </EmptyBar>
    )
  }
}

export default RegistrationProgressBar
