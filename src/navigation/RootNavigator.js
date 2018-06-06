import { createStackNavigator } from 'react-navigation'

import MainScreen from '../screens/MainScreen/index'
import RegisterScreen from '../screens/RegisterScreen/'
import UserScreen from '../screens/UserScreen/'
import UsersScreen from '../screens/UsersScreen/'
import EventsScreen from '../screens/EventsScreen/'

const RootNavigator = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
    },
    Register: {
      screen: RegisterScreen,
    },
    Users: {
      screen: UsersScreen,
    },
    User: {
      screen: UserScreen,
    },
    Events: {
      screen: EventsScreen,
    },
  },
  {
    initialRouteName: 'Main',
  },
)

export default RootNavigator
