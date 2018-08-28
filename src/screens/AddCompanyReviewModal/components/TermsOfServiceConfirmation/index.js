import React, { Component } from 'react'
import { LinkText, DescriptionText, DescriptionContainer } from './styles'
import { BlockBackground, RowContainer } from '../../styles'
import { TouchableOpacity } from 'react-native'
import CheckBoxIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import DisplayModal from '../../../../components/DisplayModal'
import TermsOfService from '../../../ProfileScreen/components/Settings/components/SettingsScreens/Screens/TermsOfService'

const CheckBox = ({ accepted }) => (
  <CheckBoxIcon
    name="checkbox-marked-circle"
    color={accepted ? 'rgb(220, 60, 53)' : 'rgb(176, 186, 200)'}
    size={30}
  />
)

export default class TermsOfServiceConfirmation extends Component {
  state = { showTermsOfService: false }
  onBackPress = () => this.setState({ showTermsOfService: false })
  render() {
    const { updateState, acceptedTerms } = this.props
    return (
      <BlockBackground>
        <DisplayModal
          isVisible={this.state.showTermsOfService}
          title="Terms Of Service"
          onBackPress={this.onBackPress}
        >
          <TermsOfService />
        </DisplayModal>
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
              <LinkText
                onPress={() => this.setState({ showTermsOfService: true })}
              >
                Terms of Use&nbsp;
              </LinkText>
              The review of my current or previous workplace is truthful.
            </DescriptionText>
          </DescriptionContainer>
        </RowContainer>
      </BlockBackground>
    )
  }
}
