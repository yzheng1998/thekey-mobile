import React, { Component } from 'react'
import { LinkText, DescriptionText, DescriptionContainer } from './styles'
import { BlockBackground, RowContainer } from '../../styles'
import { TouchableOpacity, Linking } from 'react-native'
import CheckBoxIcon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class TermsOfServiceConfirmation extends Component {
  renderCheckBox = accepted => (
    <CheckBoxIcon
      name="checkbox-marked-circle"
      color={accepted ? 'rgb(250, 53, 121)' : 'rgb(176, 186, 200)'}
      size={30}
    />
  )
  render() {
    const { handleAcceptedTerms, acceptedTerms } = this.props
    return (
      <BlockBackground>
        <RowContainer>
          <TouchableOpacity
            onPress={() => {
              handleAcceptedTerms(acceptedTerms)
              this.renderCheckBox(acceptedTerms)
            }}
          >
            {this.renderCheckBox(acceptedTerms)}
          </TouchableOpacity>
          <DescriptionContainer>
            <DescriptionText>
              I agree to The Key&nbsp;
              <LinkText onPress={() => Linking.openURL('http://google.com')}>
                Terms of Use.&nbsp;
              </LinkText>
              The review of my current or previous workplace is truthful.
            </DescriptionText>
          </DescriptionContainer>
        </RowContainer>
      </BlockBackground>
    )
  }
}
