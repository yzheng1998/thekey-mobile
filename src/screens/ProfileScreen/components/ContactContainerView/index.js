import React, { Component } from 'react'
import { ContactContainer } from './styles'
import { Container, Title } from '../../styles'

import GeneralContact from './GeneralContact'

export default class ContactContainerView extends Component {
  render() {
    const { linkedIn, facebook, twitter, email } = this.props
    return (
      <Container>
        <Title>Contact</Title>
        <ContactContainer>
          {linkedIn && (
            <GeneralContact iconName="linkedin-box" contactContent={linkedIn} />
          )}
          {twitter && (
            <GeneralContact iconName="twitter-box" contactContent={twitter} />
          )}
          {facebook && (
            <GeneralContact iconName="facebook-box" contactContent={facebook} />
          )}
          {email && <GeneralContact iconName="email" contactContent={email} />}
        </ContactContainer>
      </Container>
    )
  }
}
