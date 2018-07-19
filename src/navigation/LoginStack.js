import { createStackNavigator } from 'react-navigation'
import LoginScreen from '../screens/LoginScreen/'
import LandingScreen from '../screens/LandingScreen/'
import SignUpScreen from '../screens/SignUpScreen'
import PersonalDetailsScreen from '../screens/PersonalDetailsScreen'
import GenderScreen from '../screens/GenderScreen'
import ResumeUploadScreen from '../screens/ResumeUploadScreen'

const LoginStack = createStackNavigator(
  {
    Landing: {
      screen: LandingScreen,
      navigationOptions: () => ({
        title: 'Get Started',
      }),
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    SignUp: {
      screen: SignUpScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    PersonalDetails: {
      screen: PersonalDetailsScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Gender: {
      screen: GenderScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    ResumeUpload: {
      screen: ResumeUploadScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
  },
  {
    initialRouteName: 'Landing',
    headerMode: 'screen',
  },
)

export default LoginStack
