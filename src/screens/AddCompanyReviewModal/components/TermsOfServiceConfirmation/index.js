import React, { Component } from 'react'
import { LinkText, DescriptionText, DescriptionContainer } from './styles'
import { BlockBackground, RowContainer } from '../../styles'
import { TouchableOpacity, Linking } from 'react-native'
import CheckBoxIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const CheckBox = ({ accepted }) => (
  <CheckBoxIcon
    name="checkbox-marked-circle"
    color={accepted ? 'rgb(220, 60, 53)' : 'rgb(176, 186, 200)'}
    size={30}
  />
)

export default class TermsOfServiceConfirmation extends Component {
  render() {
    const { updateState, acceptedTerms } = this.props
    return (
      <BlockBackground>
        <RowContainer>
          <TouchableOpacity
            onPress={() => {
              updateState({ acceptedTerms: !acceptedTerms })
            }}
          >
            <CheckBox accepted={acceptedTerms} />
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
