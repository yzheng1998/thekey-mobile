import { createStackNavigator } from 'react-navigation'
import LoginScreen from '../screens/LoginScreen/'
import LandingScreen from '../screens/LandingScreen/'
import SignUpScreen from '../screens/SignUpScreen'

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
  },
  {
    initialRouteName: 'Landing',
    headerMode: 'screen',
  },
)

export default LoginStack
