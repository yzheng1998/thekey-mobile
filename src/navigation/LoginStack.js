import { createStackNavigator } from 'react-navigation'
import RegisterScreen from '../screens/RegisterScreen/'
import LoginScreen from '../screens/LoginScreen/'
import LandingScreen from '../screens/LandingScreen/'

const LoginStack = createStackNavigator(
  {
    Register: {
      screen: RegisterScreen,
      navigationOptions: () => ({
        title: 'Register',
      }),
    },
    Landing: {
      screen: LandingScreen,
      navigationOptions: () => ({
        title: 'Get Started',
      }),
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: () => ({
        title: 'Login',
      }),
    },
  },
  {
    initialRouteName: 'Landing',
    headerMode: 'screen',
  },
)

export default LoginStack
