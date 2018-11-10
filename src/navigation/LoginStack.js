import { createStackNavigator } from 'react-navigation'
import LoginScreen from '../screens/LoginScreen/'
import LandingScreen from '../screens/LandingScreen/'
import SplashScreen from '../screens/SplashScreen/'
import SignUpScreen from '../screens/SignUpScreen'
import PersonalDetailsScreen from '../screens/PersonalDetailsScreen'
import EthnicitiesScreen from '../screens/EthnicitiesScreen'
import GenderScreen from '../screens/GenderScreen'
import YourEducationScreen from '../screens/YourEducationScreen'
import EssayScreen from '../screens/EssayScreen'
import InterestsScreen from '../screens/InterestsScreen'
import DescriptionsScreen from '../screens/DescriptionsScreen'
import ResumeUploadScreen from '../screens/ResumeUploadScreen'
import ResetPasswordScreen from '../screens/ResetPasswordScreen'
import VerificationScreen from '../screens/VerificationScreen'
import PhotoUploadScreen from '../screens/PhotoUploadScreen'
import IntroductionScreen from '../screens/IntroductionScreen'
import CreatePasswordScreen from '../screens/CreatePasswordScreen'

const LoginStack = createStackNavigator(
  {
    Landing: {
      screen: LandingScreen,
      navigationOptions: () => ({
        title: 'Get Started',
        gesturesEnabled: false,
      }),
    },
    Splash: {
      screen: SplashScreen,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false,
      }),
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false,
      }),
    },
    SignUp: {
      screen: SignUpScreen,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false,
      }),
    },
    Verification: {
      screen: VerificationScreen,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false,
      }),
    },
    CreatePassword: {
      screen: CreatePasswordScreen,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false,
      }),
    },
    PersonalDetails: {
      screen: PersonalDetailsScreen,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false,
      }),
    },
    Gender: {
      screen: GenderScreen,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false,
      }),
    },
    YourEducation: {
      screen: YourEducationScreen,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false,
      }),
    },
    Essay: {
      screen: EssayScreen,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false,
      }),
    },
    Interests: {
      screen: InterestsScreen,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false,
      }),
    },
    Descriptions: {
      screen: DescriptionsScreen,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false,
      }),
    },
    Resume: {
      screen: ResumeUploadScreen,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false,
      }),
    },
    ResetPassword: {
      screen: ResetPasswordScreen,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false,
      }),
    },
    Ethnicities: {
      screen: EthnicitiesScreen,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false,
      }),
    },
    PhotoUpload: {
      screen: PhotoUploadScreen,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false,
      }),
    },
    Introduction: {
      screen: IntroductionScreen,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false,
      }),
    },
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'screen',
  },
)

export default LoginStack
