import React, { Component } from 'react'
import {
  Container,
  Scroll,
  InstructionsContainer,
  Instructions,
  EssayInput,
} from './styles'
import Header from './components/Header'

class EssayScreen extends Component {
  render() {
    return (
      <Container behavior="padding" enabled>
        <Scroll contentContaineStyle={{ alignItems: 'center' }}>
          <Header />
          <InstructionsContainer>
            <Instructions>What do you feel you will best add to</Instructions>
            <Instructions>The Key community?</Instructions>
          </InstructionsContainer>
          <EssayInput multiline autoGrow={false} />
        </Scroll>
      </Container>
    )
  }
}

export default EssayScreen
