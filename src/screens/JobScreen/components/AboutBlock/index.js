import React, { Component } from 'react'
import { Container, InfoContainer, InfoText, See, SeeButton } from './styles'

class AboutBlock extends Component {
  constructor(props) {
    super(props)
    this.state = { extend: false }
  }
  render() {
    const {
      about,
      aboutRole,
      aboutCompany,
      bringToRole,
      industry,
      commitment,
    } = this.props
    return (
      <Container>
        <InfoContainer>
          <InfoText numberOfLines={this.state.extend === false ? 4 : 0}>
            {about}
          </InfoText>
        </InfoContainer>
        <See
          onPress={() =>
            this.props.navigation.navigate('Summary', {
              aboutRole,
              aboutCompany,
              bringToRole,
              industry,
              commitment,
            })
          }
        >
          <SeeButton>SEE ALL</SeeButton>
        </See>
      </Container>
    )
  }
}

export default AboutBlock
