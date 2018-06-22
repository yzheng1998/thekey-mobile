import { createStackNavigator } from 'react-navigation'
import SocietyScreen from '../screens/SocietyScreen'
import UserScreen from '../screens/UserScreen'
import EventsScreen from '../screens/EventsScreen'
import EventScreen from '../screens/EventScreen'
import JobsScreen from '../screens/JobsScreen'
import JobScreen from '../screens/JobScreen'
import DiscoverScreen from '../screens/DiscoverScreen'
import FriendRequestScreen from '../screens/FriendRequestScreen'
import ApplyNowScreen from '../screens/ApplyNowScreen'

const DiscoverStack = createStackNavigator(
  {
    Discover: {
      screen: DiscoverScreen,
      navigationOptions: () => ({
        title: 'View Options',
      }),
    },
    Users: {
      screen: SocietyScreen,
      navigationOptions: () => ({
        title: 'View Users',
      }),
    },
    User: {
      screen: UserScreen,
      navigationOptions: () => ({
        title: 'View User',
      }),
    },
    Events: {
      screen: EventsScreen,
      navigationOptions: () => ({
        title: 'View Events',
      }),
    },
    Event: {
      screen: EventScreen,
      navigationOptions: () => ({
        title: 'View Event',
      }),
    },
    Jobs: {
      screen: JobsScreen,
      navigationOptions: () => ({
        title: 'View Jobs',
      }),
    },
    Job: {
      screen: JobScreen,
      navigationOptions: () => ({
        title: 'View Jobs',
      }),
    },
    FriendRequests: {
      screen: FriendRequestScreen,
      navigationOptions: () => ({
        title: 'View Friend Requests',
      }),
    },
    Apply: {
      screen: ApplyNowScreen,
      navigationOptions: { header: null },
    },
  },
  {
    initialRouteName: 'Discover',
    backBehavior: 'Discover',
    headerMode: 'screen',
  },
)

DiscoverStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true
  if (navigation.state.index > 0) {
    tabBarVisible = false
  }

  return {
    tabBarVisible,
  }
}

export default DiscoverStack
