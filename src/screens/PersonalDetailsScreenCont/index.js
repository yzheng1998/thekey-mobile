import React, { Component } from 'react'
import { ScreenContainer, SubtitleView, Subtitle } from './styles'
import PickerComponent from '../../components/PickerComponent'
import Header from '../../components/Header'
import RegisterButton from '../../components/RegisterButton'
import RegistrationPicker from '../../components/RegistrationPicker'
import { sexualOrientationOptions, genderOptions } from './constants'

import nodeEmoji from 'node-emoji'

export default class PersonalDetailsScreenCont extends Component {
  state = {
    sexualOrientation: '',
    gender: '',
    showSexualOrientationPicker: false,
    showGenderPicker: false,
  }

  updateText = obj => {
    this.setState(obj)
  }

  findLabel = (value, arr) => arr.find(el => el.value === value).label

  render() {
    const {
      sexualOrientation,
      gender,
      showSexualOrientationPicker,
      showGenderPicker,
    } = this.state
    const disabled =
      !(sexualOrientation && gender) ||
      showSexualOrientationPicker ||
      showGenderPicker
    const userInfo = this.props.navigation.getParam('userInfo')
    return (
      <ScreenContainer>
        <Header
          title={`${nodeEmoji.get('wave')} Hi, ${userInfo.firstName}!`}
          showBack
          onBackPress={() => this.props.navigation.goBack()}
        />
        <SubtitleView>
          <Subtitle>
            Before you can get started, tell us a little bit about yourself.
            This information is private
          </Subtitle>
        </SubtitleView>
        <RegistrationPicker
          selected={showSexualOrientationPicker}
          onPress={() => {
            if (!showGenderPicker)
              this.setState({
                showSexualOrientationPicker: true,
                sexualOrientation:
                  sexualOrientation || sexualOrientationOptions[0].value,
              })
          }}
          text={
            sexualOrientation
              ? this.findLabel(sexualOrientation, sexualOrientationOptions)
              : ''
          }
          placeholderText="What's your sexual orientation?"
        />
        <RegistrationPicker
          selected={showGenderPicker}
          onPress={() => {
            if (!showSexualOrientationPicker)
              this.setState({
                showGenderPicker: true,
                gender: gender || genderOptions[0].value,
              })
          }}
          text={gender ? this.findLabel(gender, genderOptions) : ''}
          placeholderText="What's your gender?"
        />
        <RegisterButton buttonText="NEXT" disabled={disabled} />
        {showSexualOrientationPicker && (
          <PickerComponent
            options={sexualOrientationOptions}
            doneOnPress={() => {
              this.updateText({
                showSexualOrientationPicker: false,
              })
            }}
            onValueChange={this.updateText}
            value={sexualOrientation}
            keyName="sexualOrientation"
          />
        )}
        {showGenderPicker && (
          <PickerComponent
            options={genderOptions}
            doneOnPress={() => {
              this.updateText({
                showGenderPicker: false,
              })
            }}
            onValueChange={this.updateText}
            value={gender}
            keyName="gender"
          />
        )}
      </ScreenContainer>
    )
  }
}
