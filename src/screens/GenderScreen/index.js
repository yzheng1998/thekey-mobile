import React, { Component } from 'react'
import { View, SafeAreaView } from 'react-native'
import {
  ScreenContainer,
  SubtitleView,
  Subtitle,
  GenderButton,
  ButtonText,
} from './styles'
import Header from '../../components/Header'
import RegisterButton from '../../components/RegisterButton'
import { genderOptions } from './constants'

import nodeEmoji from 'node-emoji'
import uuidv4 from 'uuid/v4'

export default class GenderScreen extends Component {
  state = {
    gender: '',
  }

  updateText = obj => {
    this.setState(obj)
  }

  findLabel = (value, arr) => arr.find(el => el.value === value).label

  render() {
    const disabled = !this.state.gender
    const userInfo = this.props.navigation.getParam('userInfo')
    return (
      <ScreenContainer>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
          <Header
            title={`${nodeEmoji.get('wave')} Hi, ${userInfo.firstName}!`}
            showBack
            onBackPress={() => this.props.navigation.goBack()}
            progress="28.5%"
          />
          <SubtitleView>
            <Subtitle>
              Select the following that apply to your gender identity &
              experience
            </Subtitle>
          </SubtitleView>
          <View>
            {genderOptions.map(option => (
              <GenderButton
                key={uuidv4()}
                clicked={option.value === this.state.gender}
                onPress={() => this.setState({ gender: option.value })}
              >
                <ButtonText>{option.label}</ButtonText>
              </GenderButton>
            ))}
          </View>
          <RegisterButton
            buttonText="NEXT"
            disabled={disabled}
            onPress={() =>
              this.props.navigation.navigate('YourEducation', {
                userInfo: { ...userInfo, gender: this.state.gender },
              })
            }
          />
        </SafeAreaView>
      </ScreenContainer>
    )
  }
}
