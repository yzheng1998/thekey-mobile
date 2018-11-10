import React, { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { Screen, Icon, RowContainer, ContentContainer } from './styles'
import constraints from './constraints'
import Header from '../../components/Header'
import BasicSubtitle from '../../components/BasicSubtitle'
import LineInput from '../../components/LineInput'
import RegistrationPicker from '../../components/RegistrationPicker'
import RegisterButton from '../../components/RegisterButton'
import personIcon from '../../../assets/personIcon.png'
import dateIcon from '../../../assets/dateIcon.png'
import { updateIntroductionInfo } from '../../redux/actions/membershipApplication'

/* eslint-disable */
import DatePicker from '../../components/DatePicker/DatePicker/'
/* eslint-enable */

const validate = require('validate.js')

// This function allows us to read from the phone's hard disk
const mapStateToProps = state => ({
  firstName: state.membershipApplication.firstName,
  lastName: state.membershipApplication.lastName,
  birthday: state.membershipApplication.birthday,
})
// This function allows us to write to the phone's hard disk
const mapDispatchToProps = {
  updateIntroductionInfo,
}

class IntroductionScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.firstName || '',
      birthday: this.props.birthday || '',
      showBirthdayPicker: false,
      touched: {},
      errors: {},
      displayErrors: {},
    }
  }

  onChange = event => {
    this.setState({ name: event.target.value })
  }

  validateForm = isOnChangeText => {
    const errors = validate(
      {
        name: this.state.name,
        birthday: this.state.birthday,
      },
      constraints,
    )

    const constructDisplayErrors = () => {
      const displayErrors = {}
      Object.keys(errors || {}).forEach(key => {
        if (this.state.touched[key]) {
          displayErrors[key] = errors[key]
        }
      })
      return displayErrors
    }

    const errorsReduced =
      Object.keys(errors || {}).length <
      Object.keys(this.state.errors || {}).length

    if (!isOnChangeText || (isOnChangeText && errorsReduced)) {
      this.setState({ displayErrors: constructDisplayErrors() })
    }
    this.setState({ errors })
  }

  addTouched = key => {
    const touched = {
      ...this.state.touched,
      [key]: true,
    }
    this.setState({ touched })
  }

  render() {
    const {
      name,
      showBirthdayPicker,
      birthday,
      displayErrors,
      errors,
    } = this.state
    const { navigation } = this.props
    const noErrors = !errors
    return (
      <Screen>
        <ContentContainer>
          <Header
            title="Introduce Yourself"
            showBack
            onBackPress={() => navigation.goBack()}
            progress="40%"
          />
          <BasicSubtitle>
            Get started by adding some basic information about yourself
          </BasicSubtitle>
          <RowContainer>
            <LineInput
              title="NAME"
              text={name}
              disabled={showBirthdayPicker}
              placeholderText="Add your full name"
              autoCapitalize="none"
              updateText={text =>
                this.setState({ name: text }, () => this.validateForm(true))
              }
              onFocus={() => {
                this.setState({ showBirthdayPicker: false }, () =>
                  this.addTouched('name'),
                )
              }}
              onBlur={() => this.validateForm(false)}
              error={displayErrors.name}
            >
              <Icon source={personIcon} />
            </LineInput>
          </RowContainer>
          <RowContainer>
            <RegistrationPicker
              title="BIRTHDAY"
              selected={showBirthdayPicker}
              onPress={() => {
                this.setState({
                  showBirthdayPicker: true,
                  birthday,
                })
                this.datePicker.openDatePicker()
              }}
              text={birthday ? moment(birthday).format('MM / DD / YYYY') : ''}
              placeholderText="mm / dd / yyyy"
            >
              <Icon source={dateIcon} />
            </RegistrationPicker>
          </RowContainer>
          <RegisterButton
            keyboardShouldPersistTaps="always"
            onPress={() => {
              const nameList = name.split(' ')
              const firstName = nameList[0]
              const lastName = nameList.slice(1).join(' ')
              this.props.updateIntroductionInfo({
                firstName,
                lastName,
                birthday,
              })
              this.props.navigation.navigate('Gender')
            }}
            buttonText="Continue"
            disabled={!name || !birthday || !noErrors}
          />
        </ContentContainer>
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
      </Screen>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(IntroductionScreen)
