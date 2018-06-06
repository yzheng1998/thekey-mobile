import { createStackNavigator } from 'react-navigation'

import MainScreen from '../screens/MainScreen/index'
import UsersScreen from '../screens/UsersScreen/'
import EventsScreen from '../screens/EventsScreen/'
import EventScreen from '../screens/EventScreen/'

const RootNavigator = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
    },
    Users: {
      screen: UsersScreen,
    },
    Events: {
      screen: EventsScreen,
    },
    Event: {
      screen: EventScreen,
    },
  },
  {
    initialRouteName: 'Main',
  },
)

export default RootNavigator
