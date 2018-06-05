import { createStackNavigator } from 'react-navigation'

import MainScreen from '../screens/MainScreen/index'

const RootNavigator = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
    },
  },
  {
    initialRouteName: 'Main',
  },
)

export default RootNavigator
