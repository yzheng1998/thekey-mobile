import React, { Component } from 'react'
import { AsyncStorage, Alert } from 'react-native'
import {
  Container,
  TextInputContainer,
  ForgotPass,
  PinkSubtitle,
  PinkSubtitleText,
  SignInButton,
  SignInText,
  Subtitle,
  SignUpContainer,
  Screen,
  Divider,
  DividerRow,
  DividerText,
} from './styles'
import EmailIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import LockIcon from 'react-native-vector-icons/Feather'
import LineInput from '../../../../components/LineInput'
import AlertMessage from '../AlertMessage'
import FBLoginButton from '../../../../components/FBLoginButton'
import LargeLinkedInLoginButton from '../LargeLinkedInLoginButton'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import {
  AccessToken,
  LoginManager,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk'
import { buttonRadius } from '../../../../constants'

const LOGIN_USER = gql`
  mutation loginUser(
    $email: String
    $password: String
    $facebookToken: String
  ) {
    loginUser(
      email: $email
      password: $password
      facebookToken: $facebookToken
    ) {
      user {
        id
        firstName
        profilePicture
      }
      token
      error {
        message
      }
    }
  }
`

class LoginBody extends Component {
  state = {
    email: '',
    password: '',
    showAlertError: false,
    errorMessage: '',
    facebookToken: '',
  }

  facebookLogin = async loginUser => {
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
      const variables = {
        facebookToken: accessToken,
      }
      loginUser({ variables })
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
      LoginManager.setLoginBehavior('native')
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
        // show error message to the user if none of the FB screens
        // did not open
        Alert.alert(
          'There was an error logging in with Facebook. Please try again.',
        )
      }
    }
    if (!result.isCancelled) {
      // Create a graph request asking for user information
      FBGraphRequest(
        'id, email, first_name, last_name, picture.type(large)',
        error => {
          if (error) {
            Alert.alert('There was an error logging into Facebook.')
          }
          // to get the data back from the graph request, add a second result field to this callback function
        },
      )
    }
  }

  render() {
    return (
      <Screen>
        <Mutation
          mutation={LOGIN_USER}
          onCompleted={async data => {
            const {
              loginUser: { token, user },
            } = data
            if (data && data.loginUser.error) {
              this.setState({
                showAlertError: true,
                errorMessage: data.loginUser.error.message,
              })
            }
            if (!data.loginUser.error) {
              await AsyncStorage.setItem('token', token)
              await AsyncStorage.setItem('userId', user.id)
              await AsyncStorage.setItem('firstName', user.firstName)
              this.props.navigation.navigate('MainTab')
            }
          }}
          onError={error =>
            this.setState({
              showAlertError: true,
              errorMessage: error.message,
            })
          }
        >
          {loginUser => (
            <Container>
              {this.state.showAlertError && (
                <AlertMessage isError message={this.state.errorMessage} />
              )}
              <TextInputContainer>
                <LineInput
                  updateText={newText => this.setState({ email: newText })}
                  text={this.state.email}
                  placeholderText="Email"
                  placeholderTextColor="rgb(139, 133, 150)"
                  autoCapitalize="none"
                  onSubmitEditing={() => this.passwordInput.focus()}
                  returnKeyType="next"
                >
                  <EmailIcon
                    name="email-outline"
                    color="rgb(181, 171, 202)"
                    size={18}
                    style={{ marginLeft: 8 }}
                  />
                </LineInput>
              </TextInputContainer>
              <TextInputContainer>
                <LineInput
                  ref={passwordInput => {
                    this.passwordInput = passwordInput
                  }}
                  updateText={newText => this.setState({ password: newText })}
                  text={this.state.password}
                  placeholderText="Password"
                  placeholderTextColor="rgb(139, 133, 150)"
                  autoCapitalize="none"
                  secureTextEntry
                  returnKeyType="done"
                >
                  <LockIcon
                    name="lock"
                    color="rgb(181, 171, 202)"
                    size={18}
                    style={{ marginLeft: 8 }}
                  />
                </LineInput>
              </TextInputContainer>

              <ForgotPass
                hitSlop={buttonRadius}
                onPress={() => this.props.navigation.navigate('ResetPassword')}
              >
                <PinkSubtitleText>Forgot password?</PinkSubtitleText>
              </ForgotPass>
              <SignInButton
                onPress={() => {
                  const variables = {
                    email: this.state.email,
                    password: this.state.password,
                  }
                  loginUser({ variables })
                }}
                disabled={this.state.email === '' || this.state.password === ''}
              >
                <SignInText>SIGN IN</SignInText>
              </SignInButton>
              <DividerRow>
                <Divider />
                <DividerText>OR</DividerText>
                <Divider />
              </DividerRow>
              <LargeLinkedInLoginButton />
              <FBLoginButton
                onPress={() => this.facebookLogin(loginUser)}
                text="Sign in with Facebook"
              />
            </Container>
          )}
        </Mutation>
        <SignUpContainer>
          <Subtitle>Don&apos;t have an account?</Subtitle>
          <PinkSubtitle
            hitSlop={buttonRadius}
            onPress={() => this.props.navigation.navigate('SignUp')}
          >
            <PinkSubtitleText>Sign Up</PinkSubtitleText>
          </PinkSubtitle>
        </SignUpContainer>
      </Screen>
    )
  }
}

export default LoginBody
