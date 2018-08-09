import React, { Component } from 'react'
import { Image, Alert, AsyncStorage } from 'react-native'
import {
  Background,
  Container,
  Content,
  SubTitle,
  Title,
  SignInButton,
  SignInText,
  RegisterButton,
  RegisterText,
  DividerRow,
  Divider,
  DividerText,
} from './styles'
import Logo from '../../stories/thekey-logo.png'
import LinkedInLoginButton from './components/LinkedInLoginButton'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import FBLoginButton from '../../components/FBLoginButton'
import {
  AccessToken,
  LoginManager,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk'

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

export default class SplashScreen extends Component {
  FBLoginCallback = async (error, result) => {
    if (error) {
      Alert.alert('rippo')
    } else {
      // Retrieve and save user details (email, firstName, id, lastName, picture) in state
      this.setState({
        email: result.email,
      })
    }
  }

  facebookLogin = async loginUser => {
    // native_only config will fail in the case that the user has
    // not installed in his device the Facebook app. In this case we
    // need to go for webview.
    const FBGraphRequest = async (fields, callback) => {
      const accessData = await AccessToken.getCurrentAccessToken()
      this.setState({
        facebookToken: accessData.accessToken,
      })
      const variables = {
        facebookToken: accessData.accessToken,
      }
      loginUser({ variables })
      // Create a graph request asking for user information
      const infoRequest = new GraphRequest(
        '/me',
        {
          accessToken: accessData.accessToken,
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
        this.FBLoginCallback,
      )
    }
  }
  render() {
    return (
      <Background>
        <Container>
          <Content>
            <Image source={Logo} style={{ height: 105, width: 79 }} />
            <SubTitle>Welcome to</SubTitle>
            <Title>The Key</Title>
          </Content>
        </Container>
        <Container>
          <SignInButton onPress={() => this.props.navigation.navigate('Login')}>
            <SignInText>SIGN IN</SignInText>
          </SignInButton>
          <RegisterButton
            onPress={() => this.props.navigation.navigate('SignUp')}
          >
            <RegisterText>REGISTER</RegisterText>
          </RegisterButton>
          <DividerRow>
            <Divider />
            <DividerText>OR</DividerText>
            <Divider />
          </DividerRow>
          <LinkedInLoginButton navigation={this.props.navigation} />
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
          >
            {loginUser => (
              <FBLoginButton
                onPress={() => this.facebookLogin(loginUser)}
                text="Sign in with Facebook"
              />
            )}
          </Mutation>
        </Container>
      </Background>
    )
  }
}
