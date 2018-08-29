import React, { Component } from 'react'
import { Alert, ScrollView, Platform } from 'react-native'
import {
  ScreenContainer,
  SubtitleView,
  Subtitle,
  SafeView,
  Divider,
  DividerRow,
  DividerText,
} from './styles'
import Header from '../../components/Header'
import LineInput from '../../components/LineInput'
import Icon from 'react-native-vector-icons/Feather'
import RegisterButton from '../../components/RegisterButton'
import LinkedInRegisterButton from './components/LinkedInRegisterButton'
import FBLoginButton from '../../components/FBLoginButton'
import {
  AccessToken,
  LoginManager,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk'
import constraints from './constraints'
import DisplayModal from '../../components/DisplayModal'
import PrivacyPolicy from '../ProfileScreen/components/Settings/components/SettingsScreens/Screens/PrivacyPolicy'
import TermsOfService from '../ProfileScreen/components/Settings/components/SettingsScreens/Screens/TermsOfService'

const validate = require('validate.js')

const loginBehavior = Platform.OS === 'ios' ? 'native' : 'NATIVE_WITH_FALLBACK'

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
      errors: null,
      touched: {},
      showPrivacyPolicy: false,
      showTermsOfService: false,
    }
  }

  FBLoginCallback = (error, result) => {
    if (error) {
      Alert.alert('There was an error logging into Facebook.')
    } else {
      // Retrieve and save user details, then navigate
      this.props.navigation.navigate('PersonalDetails', {
        userInfo: {
          facebookToken: this.state.facebookToken,
          firstName: result.first_name,
          lastName: result.last_name,
          email: result.email,
          password: '',
        },
      })
    }
  }

  facebookLogin = async () => {
    // native_only config will fail in the case that the user has
    // not installed in his device the Facebook app. In this case we
    // need to go for webview.
    LoginManager.logOut()
    const FBGraphRequest = async (fields, callback) => {
      const accessData = await AccessToken.getCurrentAccessToken()
      const { accessToken } = accessData

      this.setState({
        facebookToken: accessToken,
      })
      // Create a graph request asking for user information
      const infoRequest = new GraphRequest(
        '/me',
        {
          accessToken,
          parameters: {
            fields: {
              string: fields,
            },
          },
        },
        callback.bind(this),
      )
      // Execute the graph request created above
      new GraphRequestManager().addRequest(infoRequest).start()
    }
    let result
    try {
      LoginManager.setLoginBehavior(loginBehavior)
      result = await LoginManager.logInWithReadPermissions([
        'public_profile',
        'email',
      ])
    } catch (nativeError) {
      try {
        LoginManager.setLoginBehavior('web')
        result = await LoginManager.logInWithReadPermissions([
          'public_profile',
          'email',
        ])
      } catch (webError) {
        // show error message to the user if none of the FB screens open
        Alert.alert(
          'There was an error logging in with Facebook. Please try again.',
        )
      }
    }
    // handle the case that users clicks cancel button in Login view
    if (result && !result.isCancelled) {
      // Create a graph request asking for user information
      FBGraphRequest(
        'id, email, first_name, last_name, picture.type(large)',
        this.FBLoginCallback,
      )
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

  privacyOnBackPress = () => this.setState({ showPrivacyPolicy: false })
  termsOnBackPress = () => this.setState({ showTermsOfService: false })

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
        <DisplayModal
          isVisible={this.state.showPrivacyPolicy}
          title="Privacy Policy"
          onBackPress={this.privacyOnBackPress}
        >
          <PrivacyPolicy />
        </DisplayModal>
        <DisplayModal
          isVisible={this.state.showTermsOfService}
          title="Terms Of Service"
          onBackPress={this.termsOnBackPress}
        >
          <TermsOfService />
        </DisplayModal>
        <SafeView>
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
                this.setState({ lastName: text }, () => this.validateForm(true))
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
                this.setState({ password: text }, () => this.validateForm(true))
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
                <Subtitle
                  hyperlink
                  onPress={() => this.setState({ showTermsOfService: true })}
                >
                  Terms & Conditions{' '}
                </Subtitle>
                and{' '}
                <Subtitle
                  hyperlink
                  onPress={() => this.setState({ showPrivacyPolicy: true })}
                >
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
            <DividerRow>
              <Divider />
              <DividerText>OR</DividerText>
              <Divider />
            </DividerRow>
            <LinkedInRegisterButton navigation={this.props.navigation} />
            <FBLoginButton
              onPress={() => this.facebookLogin()}
              text="Continue with Facebook"
            />
          </ScrollView>
        </SafeView>
      </ScreenContainer>
    )
  }
}
