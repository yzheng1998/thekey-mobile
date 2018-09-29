import React, { Component } from 'react'
import { SafeAreaView, View, ScrollView } from 'react-native'
import { ScreenContainer, SubtitleView, Subtitle } from './styles'
import Header from '../../components/Header'
import RegisterButton from '../../components/RegisterButton'
import RegistrationPicker from '../../components/RegistrationPicker'
import HometownSearchModal from '../../components/HometownSearchModal'
import moment from 'moment'

/* eslint-disable */
import DatePicker from '../../components/DatePicker/DatePicker/'
/* eslint-enable */

import nodeEmoji from 'node-emoji'

import { connect } from 'react-redux'
import { updatePersonalDetails } from '../../redux/actions/membershipApplication'

const mapStateToProps = state => ({
  firstName: state.membershipApplication.firstName,
  hometown: state.membershipApplication.hometown,
  birthday: state.membershipApplication.birthday,
})

const mapDispatchToProps = {
  updatePersonalDetails,
}

class PersonalDetailsScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hometown: props.hometown || '',
      birthday: props.birthday || '',
      showHometownPicker: false,
      showBirthdayPicker: false,
    }
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
      hometown,
      birthday,
      showHometownPicker,
      showBirthdayPicker,
    } = this.state
    const disabled =
      !(hometown && birthday) || showHometownPicker || showBirthdayPicker
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
          <ScrollView keyboardShouldPersistTaps="always">
            <HometownSearchModal
              setText={this.updateText}
              onPress={this.closeHometownPicker}
              visible={showHometownPicker}
              showEmoji
            />
            <ScreenContainer>
              <Header
                title={`${nodeEmoji.get('wave')} Hi, ${this.props.firstName}!`}
                showBack
                onBackPress={() => this.props.navigation.goBack()}
                progress="14.2%"
              />
              <SubtitleView>
                <Subtitle>
                  Before you can get started, tell us a little bit about
                  yourself. This information is private
                </Subtitle>
              </SubtitleView>
              <RegistrationPicker
                selected={showHometownPicker}
                onPress={() => {
                  if (!showBirthdayPicker)
                    this.setState({ showHometownPicker: true })
                }}
                text={hometown}
                placeholderText="What's your hometown?"
              />

              <RegistrationPicker
                selected={showBirthdayPicker}
                onPress={() => {
                  if (!showHometownPicker) {
                    this.setState({
                      showBirthdayPicker: true,
                      birthday,
                    })
                    this.datePicker.openDatePicker()
                  }
                }}
                text={birthday ? moment(birthday).format('MMMM D, YYYY') : ''}
                placeholderText="What's your birthday?"
              />
              <RegisterButton
                buttonText="NEXT"
                disabled={disabled}
                onPress={() => {
                  this.props.updatePersonalDetails({
                    hometown,
                    birthday,
                  })
                  this.props.navigation.navigate('Ethnicities')
                }}
              />
            </ScreenContainer>
          </ScrollView>
        </SafeAreaView>
        <DatePicker
          ref={datePicker => {
            this.datePicker = datePicker
          }}
          visible={showBirthdayPicker}
          mode="date"
          date={birthday || new Date(1996, 0, 1)}
          doneOnPress={() => {
            this.setState({
              showBirthdayPicker: false,
            })
          }}
          setDate={date => {
            this.setState({
              birthday: date,
            })
          }}
        />
      </View>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PersonalDetailsScreen)
