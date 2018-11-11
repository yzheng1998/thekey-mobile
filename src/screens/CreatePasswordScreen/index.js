import React, { Component } from 'react'
import { Screen } from './styles'
import Header from '../../components/Header'
import BasicSubtitle from '../../components/BasicSubtitle'
import LineInput from '../../components/LineInput'
import RegisterButton from '../../components/RegisterButton'
import constraints from './constraints'
import { connect } from 'react-redux'
import { updatePassword } from '../../redux/actions/membershipApplication'

const validate = require('validate.js')

const mapStateToProps = state => ({
  password: state.membershipApplication.password,
})

const mapDispatchToProps = {
  updatePassword,
}

class CreatePasswordScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      password: props.password || '',
      passwordConfirmation: '',
      displayErrors: {},
      errors: {},
      touched: {},
    }
  }

  validateForm = isOnChangeText => {
    const errors = validate(
      {
        password: this.state.password,
        passwordConfirmation: this.state.passwordConfirmation,
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
    const { password, passwordConfirmation, displayErrors, errors } = this.state
    const noErrors = !errors
    return (
      <Screen>
        <Header
          title="Create a Password"
          showBack
          onBackPress={() => this.props.navigation.goBack()}
          progress="30%"
        />
        <BasicSubtitle>
          Your password should contain 1 letter, 1 number, and at least 6
          characters
        </BasicSubtitle>
        <LineInput
          secureTextEntry
          text={password}
          placeholderText="Password"
          autoCapitalize="none"
          updateText={text => {
            this.setState({ password: text }, () => this.validateForm(true))
          }}
          onFocus={() => this.addTouched('password')}
          onBlur={() => this.validateForm(false)}
          error={displayErrors.password}
        />
        <LineInput
          secureTextEntry
          text={passwordConfirmation}
          placeholderText="Confirm password"
          autoCapitalize="none"
          updateText={text => {
            this.setState({ passwordConfirmation: text }, () =>
              this.validateForm(true),
            )
          }}
          onFocus={() => this.addTouched('passwordConfirmation')}
          onBlur={() => this.validateForm(false)}
          error={displayErrors.passwordConfirmation}
        />
        <RegisterButton
          keyboardShouldPersistTaps="always"
          onPress={() => {
            this.props.updatePassword({
              password,
            })
            this.props.navigation.navigate('Introduction', {
              userInfo: {
                password,
              },
            })
          }}
          buttonText="Continue"
          disabled={!noErrors}
        />
      </Screen>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreatePasswordScreen)
