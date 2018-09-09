import React, { Component } from 'react'
import { View, SafeAreaView, ScrollView } from 'react-native'
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

import { connect } from 'react-redux'
import { updateGender } from '../../redux/actions/membershipApplication'

const mapStateToProps = state => ({
  firstName: state.membershipApplication.firstName,
  gender: state.membershipApplication.gender,
})

const mapDispatchToProps = {
  updateGender,
}

class GenderScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gender: props.gender || '',
    }
  }

  updateText = obj => {
    this.setState(obj)
  }

  findLabel = (value, arr) => arr.find(el => el.value === value).label

  render() {
    const disabled = !this.state.gender
    return (
      <ScreenContainer>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
          <ScrollView keyboardShouldPersistTaps="always">
            <Header
              title={`${nodeEmoji.get('wave')} Hi, ${this.props.firstName}!`}
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
                  key={option.value}
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
              onPress={() => {
                this.props.updateGender({ gender: this.state.gender })
                this.props.navigation.navigate('YourEducation')
              }}
            />
          </ScrollView>
        </SafeAreaView>
      </ScreenContainer>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GenderScreen)
