import React, { Component } from 'react'
import {
  Image,
  Alert,
  View,
  AsyncStorage,
  Dimensions,
  SafeAreaView,
} from 'react-native'
import {
  Background,
  Container,
  Content,
  SubTitle,
  SwiperContainer,
  Title,
  SignInButton,
  SignInText,
  RegisterButton,
  RegisterText,
  DividerRow,
  Divider,
  DividerText,
} from './styles'
import Swiper from 'react-native-swiper'
import logo from '../../../assets/theKeyLogo.png'
import discoverGraphic from '../../../assets/discoverGraphic.png'
import connectGraphic from '../../../assets/connectGraphic.png'
import shareGraphic from '../../../assets/shareGraphic.png'
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

const { height } = Dimensions.get('window')

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
      <Background>
        <SafeAreaView style={{ flex: 0.5, backgroundColor: 'white' }}>
          <SwiperContainer>
            <Swiper
              ref={component => {
                this.swiper = component
              }}
              loop
              autoplay
              autoplayTimeout={2}
              scrollEnabled={false}
              style={{
                backgroundColor: 'white',
              }}
              paginationStyle={{ bottom: 14 }}
              activeDot={
                <View
                  style={{
                    backgroundColor: 'rgb(220, 60, 53)',
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginLeft: 3,
                    marginRight: 3,
                    marginTop: 3,
                    marginBottom: 3,
                  }}
                />
              }
              dot={
                <View
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, .2)',
                    width: 6,
                    height: 6,
                    borderRadius: 3,
                    marginLeft: 3,
                    marginRight: 3,
                    marginTop: 3,
                    marginBottom: 3,
                  }}
                />
              }
            >
              <Content>
                <Image
                  source={logo}
                  style={{
                    height: height * 0.11,
                    width: height * 0.33,
                  }}
                />
              </Content>
              <Content>
                <Image
                  source={connectGraphic}
                  style={{
                    position: 'absolute',
                    top: 40,
                    width: height * 0.35,
                    height: height * 0.25,
                  }}
                />
                <View
                  style={{
                    position: 'absolute',
                    bottom: 40,
                    alignItems: 'center',
                  }}
                >
                  <Title>Connect.</Title>
                  <SubTitle>Connect with peers and alumni</SubTitle>
                </View>
              </Content>
              <Content>
                <Image
                  source={discoverGraphic}
                  style={{
                    top: 38,
                    position: 'absolute',
                    width: height * 0.32,
                    height: height * 0.27,
                  }}
                />
                <View
                  style={{
                    position: 'absolute',
                    bottom: 40,
                    alignItems: 'center',
                  }}
                >
                  <Title>Discover.</Title>
                  <SubTitle>
                    Discover opportunities, events, and groups
                  </SubTitle>
                </View>
              </Content>
              <Content>
                <Image
                  source={shareGraphic}
                  style={{
                    position: 'absolute',
                    top: 39,
                    width: height * 0.37,
                    height: height * 0.268,
                  }}
                />
                <View
                  style={{
                    position: 'absolute',
                    bottom: 40,
                    alignItems: 'center',
                  }}
                >
                  <Title>Share.</Title>
                  <SubTitle>Share knowledge on companies</SubTitle>
                </View>
              </Content>
            </Swiper>
          </SwiperContainer>
        </SafeAreaView>
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
