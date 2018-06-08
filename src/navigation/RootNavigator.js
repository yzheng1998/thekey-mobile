import { createStackNavigator } from 'react-navigation'

import MainScreen from '../screens/MainScreen/index'
import EventsScreen from '../screens/EventsScreen/'
import EventScreen from '../screens/EventScreen/'
import RegisterScreen from '../screens/RegisterScreen/'
import UserScreen from '../screens/UserScreen/'
import UsersScreen from '../screens/UsersScreen/'
import JobScreen from '../screens/JobScreen'
import JobsScreen from '../screens/JobsScreen'
import FriendRequestScreen from '../screens/FriendRequestScreen'

const RootNavigator = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
    },
    Events: {
      screen: EventsScreen,
    },
    Event: {
      screen: EventScreen,
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
    Jobs: {
      screen: JobsScreen,
    },
    Job: {
      screen: JobScreen,
    },
    FriendRequestScreen: {
      screen: FriendRequestScreen,
    },
  },
  {
    initialRouteName: 'Main',
  },
)

export default RootNavigator
