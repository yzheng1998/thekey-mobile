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

import { connect } from 'react-redux'
import {
  updateEmail,
  updateFacebookInfo,
} from '../../redux/actions/membershipApplication'
import { Mutation } from 'react-apollo'
import { SEND_VERIFICATION } from './mutations'

const validate = require('validate.js')

const loginBehavior = Platform.OS === 'ios' ? 'native' : 'NATIVE_WITH_FALLBACK'

const mapStateToProps = state => ({
  email: state.membershipApplication.email,
})

const mapDispatchToProps = {
  updateEmail,
  updateFacebookInfo,
}

class SignUpScreen extends Component {
  constructor(props) {
    super(props)
    this.updateState = this.setState.bind(this)
    this.state = {
      email: props.email || '',
      displayErrors: {},
      errors: {},
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

      const facebookInfo = {
        facebookToken: this.state.facebookToken,
        firstName: result.first_name,
        lastName: result.last_name,
        email: result.email,
        password: '',
        profilePicture: result.picture.data.url,
      }
      this.props.updateFacebookInfo(facebookInfo)

      this.props.navigation.navigate('PersonalDetails', {
        userInfo: facebookInfo,
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
        email: this.state.email,
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
    const { email, errors, displayErrors } = this.state
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
          <ScrollView keyboardShouldPersistTaps="never">
            <Header
              title="Sign Up"
              showBack
              onBackPress={() => this.props.navigation.goBack()}
            />
            <LineInput
              ref={emailInput => {
                this.emailInput = emailInput
              }}
              text={email}
              placeholderText="Email (college email preferred)"
              autoCapitalize="none"
              updateText={text => {
                this.setState({ email: text }, () => this.validateForm(true))
              }}
              onFocus={() => this.addTouched('email')}
              onBlur={() => this.validateForm(false)}
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
            <Mutation
              mutation={SEND_VERIFICATION}
              onCompleted={data => {
                if (data.sendVerification.error) {
                  Alert.alert(
                    'Failed to upload your application',
                    'There was an error sending in your application. Please try again.',
                    [{ text: 'OK', onPress: () => {} }],
                    { cancelable: true },
                  )
                } else
                  this.props.navigation.navigate('Verification', {
                    userInfo: { email },
                    verificationCode: data.sendVerification.verificationCode,
                  })
              }}
            >
              {sendVerification => (
                <RegisterButton
                  keyboardShouldPersistTaps="always"
                  onPress={() => {
                    const variables = {
                      email,
                    }
                    this.props.updateEmail({
                      email,
                    })
                    sendVerification({ variables })
                  }}
                  buttonText="SIGN UP & ACCEPT"
                  disabled={!noErrors}
                />
              )}
            </Mutation>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpScreen)
