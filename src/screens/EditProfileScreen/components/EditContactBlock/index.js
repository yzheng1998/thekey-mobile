import React, { Component } from 'react'
import { Container, BlockTitle, ContactContainer } from '../../styles'
import GeneralContactInput from './GeneralContactInput'

export default class EditContactBlock extends Component {
  render() {
    const { linkedIn, twitter, facebook, email, onChangeText } = this.props
    return (
      <Container>
        <BlockTitle>Contact</BlockTitle>
        <ContactContainer>
          <GeneralContactInput
            iconName="linkedin-box"
            value={linkedIn}
            placeholder="Linkedin.com/name"
            onChangeText={text => onChangeText({ linkedIn: text })}
          />
          <GeneralContactInput
            iconName="twitter-box"
            value={twitter}
            placeholder="@username"
            onChangeText={text => onChangeText({ twitter: text })}
          />
          <GeneralContactInput
            iconName="facebook-box"
            value={facebook}
            placeholder="facebook.com/name"
            onChangeText={text => onChangeText({ facebook: text })}
          />
          <GeneralContactInput
            iconName="email"
            value={email}
            placeholder="person@email.com"
            onChangeText={text => onChangeText({ email: text })}
          />
        </ContactContainer>
      </Container>
    )
  }
}
