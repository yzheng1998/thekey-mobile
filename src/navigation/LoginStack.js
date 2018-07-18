import { createStackNavigator } from 'react-navigation'
import RegisterScreen from '../screens/RegisterScreen/'
import LoginScreen from '../screens/LoginScreen/'
import LandingScreen from '../screens/LandingScreen/'
import SplashScreen from '../screens/SplashScreen/'

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
    Splash: {
      screen: SplashScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Login: {
      screen: LoginScreen,
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
