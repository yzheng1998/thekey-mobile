import React, { Component } from 'react'
import {
  Container,
  InstructionsContainer,
  Instructions,
  AddEducationButton,
  ButtonText,
} from './styles'
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
        <AddEducationButton>
          <ButtonText size={18}>+</ButtonText>
          <ButtonText>ADD SCHOOL</ButtonText>
        </AddEducationButton>
      </Container>
    )
  }
}

export default YourEducationScreen
