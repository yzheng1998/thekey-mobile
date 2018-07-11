import React, { Component } from 'react'
import { Container, Title, Cancel, Button } from './styles'

class Header extends Component {
  render() {
    return (
      <Container>
        <Button>
          <Cancel>Cancel</Cancel>
        </Button>
        <Title>Add Company</Title>
      </Container>
    )
  }
}

export default Header
