import React, { Component } from 'react'
import { Container, Title, Cancel, Button } from './styles'
import { buttonRadius } from '../../../../constants'

class Header extends Component {
  render() {
    return (
      <Container>
        <Button hitSlop={buttonRadius}>
          <Cancel>Cancel</Cancel>
        </Button>
        <Title>Add Company</Title>
      </Container>
    )
  }
}

export default Header
