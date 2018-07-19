import React, { Component } from 'react'
import { ScreenContainer, SubtitleView, Subtitle } from './styles'
import PickerComponent from '../../components/PickerComponent'
import Header from '../../components/Header'
import RegisterButton from '../../components/RegisterButton'
import RegistrationPicker from '../../components/RegistrationPicker'
import { ethnicityOptions } from './constants'
import HometownSearchModal from '../../components/HometownSearchModal'
import RegistrationProgressBar from '../../components/RegistrationProgressBar'

import nodeEmoji from 'node-emoji'

export default class PersonalDetailsScreen extends Component {
  state = {
    ethnicity: '',
    hometown: '',
    showEthnictyPicker: false,
    showHometownPicker: false,
  }

  updateText = obj => {
    this.setState(obj)
  }

  closeHometownPicker = () => {
    this.setState({ showHometownPicker: false })
  }

  findLabel = (value, arr) => arr.find(el => el.value === value).label

  render() {
    const {
      ethnicity,
      hometown,
      showEthnictyPicker,
      showHometownPicker,
    } = this.state
    const disabled =
      !(ethnicity && hometown) || showEthnictyPicker || showHometownPicker
    const userInfo = this.props.navigation.getParam('userInfo')

    return (
      <ScreenContainer>
        <HometownSearchModal
          setText={this.updateText}
          onPress={this.closeHometownPicker}
          visible={showHometownPicker}
        />
        <Header
          title={`${nodeEmoji.get('wave')} Hi, ${userInfo.firstName}!`}
          showBack
          onBackPress={() => this.props.navigation.goBack()}
        />
        <RegistrationProgressBar progress="14.2%" />
        <SubtitleView>
          <Subtitle>
            Before you can get started, tell us a little bit about yourself.
            This information is private
          </Subtitle>
        </SubtitleView>
        <RegistrationPicker
          selected={showHometownPicker}
          onPress={() => {
            if (!showEthnictyPicker) this.setState({ showHometownPicker: true })
          }}
          text={hometown}
          placeholderText="What's your hometown?"
        />
        <RegistrationPicker
          selected={showEthnictyPicker}
          onPress={() => {
            if (!showHometownPicker)
              this.setState({
                showEthnictyPicker: true,
                ethnicity: ethnicity || ethnicityOptions[0].value,
              })
          }}
          text={ethnicity ? this.findLabel(ethnicity, ethnicityOptions) : ''}
          placeholderText="What's your ethnicity"
        />
        <RegisterButton
          buttonText="NEXT"
          disabled={disabled}
          onPress={() =>
            this.props.navigation.navigate('Gender', {
              userInfo: { ...userInfo, ethnicity, hometown },
            })
          }
        />
        {showEthnictyPicker && (
          <PickerComponent
            options={ethnicityOptions}
            doneOnPress={() => {
              this.updateText({
                showEthnictyPicker: false,
              })
            }}
            onValueChange={this.updateText}
            value={ethnicity}
            keyName="ethnicity"
          />
        )}
      </ScreenContainer>
    )
  }
}
