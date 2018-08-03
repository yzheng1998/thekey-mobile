import React, { Component } from 'react'
import { View, SafeAreaView } from 'react-native'
import { ScreenContainer, SubtitleView, Subtitle } from './styles'
import PickerComponent from '../../components/PickerComponent'
import Header from '../../components/Header'
import RegisterButton from '../../components/RegisterButton'
import RegistrationPicker from '../../components/RegistrationPicker'
import { ethnicityOptions } from './constants'
import HometownSearchModal from '../../components/HometownSearchModal'
import moment from 'moment'
import DatePicker from '../../components/DatePicker/DatePicker'
import nodeEmoji from 'node-emoji'

export default class PersonalDetailsScreen extends Component {
  state = {
    ethnicity: '',
    hometown: '',
    birthday: '',
    showEthnicityPicker: false,
    showHometownPicker: false,
    showBirthdayPicker: false,
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
      birthday,
      showEthnicityPicker,
      showHometownPicker,
      showBirthdayPicker,
    } = this.state
    const disabled =
      !(ethnicity && hometown) || showEthnicityPicker || showHometownPicker
    const userInfo = this.props.navigation.getParam('userInfo')
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
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
              progress="14.2%"
            />
            <SubtitleView>
              <Subtitle>
                Before you can get started, tell us a little bit about yourself.
                This information is private
              </Subtitle>
            </SubtitleView>
            <RegistrationPicker
              selected={showHometownPicker}
              onPress={() => {
                if (!showEthnicityPicker && !showBirthdayPicker)
                  this.setState({ showHometownPicker: true })
              }}
              text={hometown}
              placeholderText="What's your hometown?"
            />
            <RegistrationPicker
              selected={showEthnicityPicker}
              onPress={() => {
                if (!showHometownPicker && !showBirthdayPicker)
                  this.setState({
                    showEthnicityPicker: true,
                    ethnicity: ethnicity || ethnicityOptions[0].value,
                  })
              }}
              text={
                ethnicity ? this.findLabel(ethnicity, ethnicityOptions) : ''
              }
              placeholderText="What's your ethnicity"
            />
            <RegistrationPicker
              selected={showBirthdayPicker}
              onPress={() => {
                if (!showHometownPicker && !showEthnicityPicker)
                  this.setState({
                    showBirthdayPicker: true,
                    birthday: birthday,
                  })
              }}
              text={birthday ? moment(birthday).format('MMMM D, YYYY') : ''}
              placeholderText="What's your birthday?"
            />

            <RegisterButton
              buttonText="NEXT"
              disabled={disabled}
              onPress={() =>
                this.props.navigation.navigate('Gender', {
                  userInfo: { ...userInfo, ethnicity, hometown, birthday },
                })
              }
            />
          </ScreenContainer>
          <DatePicker
            visible={showBirthdayPicker}
            mode="date"
            date={birthday || new Date(2000, 0, 1)}
            doneOnPress={() => {
              this.setState({
                showBirthdayPicker: false,
              })
            }}
            setDate={birthday => {
              this.setState({
                birthday,
              })
            }}
          />
          {showEthnicityPicker && (
            <PickerComponent
              options={ethnicityOptions}
              doneOnPress={() => {
                this.updateText({
                  showEthnicityPicker: false,
                })
              }}
              onValueChange={this.updateText}
              value={ethnicity}
              keyName="ethnicity"
            />
          )}
        </SafeAreaView>
      </View>
    )
  }
}
