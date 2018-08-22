import React, { Component } from 'react'
import { Container, InfoContainer, InfoText } from './styles'

class AboutBlock extends Component {
  state = { truncated: true }

  changeSize = () => {
    this.setState({ truncated: !this.state.truncated })
  }

  render() {
    const { about } = this.props
    return (
      <Container>
        <InfoContainer activeOpacity={0.9} onPress={this.changeSize}>
          <InfoText numberOfLines={this.state.truncated ? 4 : 0}>
            {about}
          </InfoText>
        </InfoContainer>
      </Container>
    )
  }
}

export default AboutBlock
