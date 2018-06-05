import { createStackNavigator } from 'react-navigation'

import MainScreen from '../screens/MainScreen/index'
import RegisterScreen from '../screens/RegisterScreen/'

const RootNavigator = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
    },
    Register: {
      screen: RegisterScreen,
    },
  },
  {
    initialRouteName: 'Main',
  },
)

export default RootNavigator
