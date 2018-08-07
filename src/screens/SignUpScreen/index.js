import React, { Component } from 'react'
import { KeyboardAvoidingView, Alert, ScrollView } from 'react-native'
import {
  ScreenContainer,
  SubtitleView,
  Subtitle,
  SafeView,
  FacebookButtonContainer,
} from './styles'
import Header from '../../components/Header'
import LineInput from '../../components/LineInput'
import Icon from 'react-native-vector-icons/Feather'
import RegisterButton from '../../components/RegisterButton'
import LinkedInRegisterButton from './components/LinkedInRegisterButton'
import { LoginButton, AccessToken } from 'react-native-fbsdk'
import axios from 'axios'
import constraints from './constraints'

const validate = require('validate.js')

const FACEBOOK_API_URL = 'https://graph.facebook.com/v3.1/'

export default class SignUpScreen extends Component {
  constructor(props) {
    super(props)
    this.updateState = this.setState.bind(this)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      displayErrors: {},
      errors: {},
      touched: {},
    }
  }

  validateForm = isOnChangeText => {
    const errors = validate(
      {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
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

  updateText = (key, text) => {
    this.setState({ [key]: text })
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      errors,
      displayErrors,
    } = this.state
    const noErrors = !errors
    return (
      <ScreenContainer>
        <SafeView>
          <KeyboardAvoidingView behavior="padding" enabled>
            <ScrollView keyboardShouldPersistTaps="always">
              <Header
                title="Sign Up"
                showBack
                onBackPress={() => this.props.navigation.goBack()}
              />
              <LineInput
                text={firstName}
                placeholderText="First name"
                updateText={text => {
                  this.setState({ firstName: text }, () =>
                    this.validateForm(true),
                  )
                }}
                onFocus={() => this.addTouched('firstName')}
                onBlur={() => this.validateForm(false)}
                onSubmitEditing={() => this.lastNameInput.focus()}
                returnKeyType="next"
                error={displayErrors.firstName}
              />
              <LineInput
                ref={lastNameInput => {
                  this.lastNameInput = lastNameInput
                }}
                text={lastName}
                placeholderText="Last name"
                updateText={text => {
                  this.setState({ lastName: text }, () =>
                    this.validateForm(true),
                  )
                }}
                onFocus={() => this.addTouched('lastName')}
                onBlur={() => this.validateForm(false)}
                onSubmitEditing={() => this.emailInput.focus()}
                returnKeyType="next"
                error={displayErrors.lastName}
              />
              <LineInput
                ref={emailInput => {
                  this.emailInput = emailInput
                }}
                text={email}
                placeholderText="Email"
                autoCapitalize="none"
                updateText={text => {
                  this.setState({ email: text }, () => this.validateForm(true))
                }}
                onFocus={() => this.addTouched('email')}
                onBlur={() => this.validateForm(false)}
                onSubmitEditing={() => this.passwordInput.focus()}
                returnKeyType="next"
                error={displayErrors.email}
              >
                <Icon
                  name="mail"
                  size={18}
                  color="rgb(139, 133, 150)"
                  style={{ marginLeft: 8 }}
                />
              </LineInput>
              <LineInput
                ref={passwordInput => {
                  this.passwordInput = passwordInput
                }}
                text={password}
                placeholderText="Password (minimum 6 characters)"
                secureTextEntry
                autoCapitalize="none"
                updateText={text => {
                  this.setState({ password: text }, () =>
                    this.validateForm(true),
                  )
                }}
                onFocus={() => this.addTouched('password')}
                onBlur={() => this.validateForm(false)}
                returnKeyType="done"
                error={displayErrors.password}
              >
                <Icon
                  name="lock"
                  size={18}
                  color="rgb(139, 133, 150)"
                  style={{ marginLeft: 8 }}
                />
              </LineInput>
              <SubtitleView>
                <Subtitle>
                  {'By clicking “Sign up & Accept”, you agree to The Keys '}
                  <Subtitle hyperlink onPress={() => null}>
                    Terms & Conditions{' '}
                  </Subtitle>
                  and{' '}
                  <Subtitle hyperlink onPress={() => null}>
                    Privacy Policy
                  </Subtitle>.
                </Subtitle>
              </SubtitleView>
              <RegisterButton
                keyboardShouldPersistTaps="always"
                onPress={() =>
                  this.props.navigation.navigate('PersonalDetails', {
                    userInfo: {
                      firstName,
                      lastName,
                      email,
                      password,
                    },
                  })
                }
                buttonText="SIGN UP & ACCEPT"
                disabled={!noErrors}
              />
              <FacebookButtonContainer>
                <LoginButton
                  readPermissions={['email']}
                  onLoginFinished={(error, result) => {
                    if (error) {
                      Alert.alert(
                        'Error Ocurred',
                        'Could not log in to Facebook',
                      )
                    } else if (result.isCancelled) {
                      Alert.alert(
                        'Error Occurred',
                        'Facebook login was unexpectedly cancelled.',
                      )
                    } else {
                      AccessToken.getCurrentAccessToken().then(async data => {
                        const token = data.accessToken.toString()

                        const { data: user } = await axios.get(
                          `${FACEBOOK_API_URL}/me?fields=id,name,first_name,last_name,email&access_token=${token}`,
                        )

                        this.props.navigation.navigate('PersonalDetails', {
                          userInfo: {
                            facebookToken: token,
                            firstName: user.first_name,
                            lastName: user.last_name,
                            email: user.email,
                            password: '',
                          },
                        })
                      })
                    }
                  }}
                />
                <LinkedInRegisterButton navigation={this.props.navigation} />
              </FacebookButtonContainer>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeView>
      </ScreenContainer>
    )
  }
}
