import React, { Component } from 'react'
import { Container, InstructionsContainer, Instructions } from './styles'
import Header from './components/Header'

class YourEducationScreen extends Component {
  render() {
    return (
      <Container>
        <Header />
        <InstructionsContainer>
          <Instructions>Below, add the schools you attended</Instructions>
          <Instructions>throughout your education</Instructions>
        </InstructionsContainer>
      </Container>
    )
  }
}

export default YourEducationScreen
