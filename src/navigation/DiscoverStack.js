import { createStackNavigator } from 'react-navigation'
import SocietyScreen from '../screens/SocietyScreen'
import UserScreen from '../screens/UserScreen'
import EventsScreen from '../screens/EventsScreen'
import EventScreen from '../screens/EventScreen'
import JobsScreen from '../screens/JobsScreen'
import JobScreen from '../screens/JobScreen'
import DiscoverScreen from '../screens/DiscoverScreen'
import FriendRequestScreen from '../screens/FriendRequestScreen'
import Summary from '../screens/JobSummaryScreen'
import ReviewsScreen from '../screens/ReviewsScreen'
import ReviewScreen from '../screens/ReviewScreen'
import ProfileScreen from '../screens/ProfileScreen'
import SimilarJobsScreen from '../screens/SimilarJobsScreen'
import SimilarEventsScreen from '../screens/SimilarEventsScreen'
import PeopleList from '../screens/PeopleList'
import MemberScreen from '../screens/MemberScreen'
import EditProfileScreen from '../screens/EditProfileScreen'
import AddEducationForm from '../screens/EditProfileScreen/components/AddEducationForm'
import AddExperienceForm from '../screens/EditProfileScreen/components/AddExperienceForm'
import QRScannerScreen from '../screens/QRScannerScreen'

const DiscoverStack = createStackNavigator(
  {
    Discover: {
      screen: DiscoverScreen,
      navigationOptions: () => ({
        title: 'View Options',
        gesturesEnabled: false,
      }),
    },
    Society: {
      screen: SocietyScreen,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false,
      }),
    },
    User: {
      screen: UserScreen,
      navigationOptions: () => ({
        title: 'View User',
        gesturesEnabled: false,
      }),
    },
    Member: {
      screen: MemberScreen,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false,
      }),
    },
    Events: {
      screen: EventsScreen,
      navigationOptions: () => ({
        title: 'View Events',
        gesturesEnabled: false,
      }),
    },
    Event: {
      screen: EventScreen,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false,
      }),
    },
    Jobs: {
      screen: JobsScreen,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false,
      }),
    },
    Job: {
      screen: JobScreen,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false,
      }),
    },
    Summary: {
      screen: Summary,
      navigationOptions: () => ({
        title: 'Job Summary',
        header: null,
        gesturesEnabled: false,
      }),
    },
    Reviews: {
      screen: ReviewsScreen,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false,
      }),
    },
    Review: {
      screen: ReviewScreen,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false,
      }),
    },
    FriendRequests: {
      screen: FriendRequestScreen,
      navigationOptions: () => ({
        title: 'View Friend Requests',
        gesturesEnabled: false,
      }),
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false,
      }),
    },
    EditProfile: {
      screen: EditProfileScreen,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false,
      }),
    },
    AddEducation: {
      screen: AddEducationForm,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false,
      }),
    },
    AddExperience: {
      screen: AddExperienceForm,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false,
      }),
    },
    SimilarJobsScreen: {
      screen: SimilarJobsScreen,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false,
      }),
    },
    SimilarEventsScreen: {
      screen: SimilarEventsScreen,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false,
      }),
    },
    PeopleList: {
      screen: PeopleList,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false,
      }),
    },
    QRScanner: {
      screen: QRScannerScreen,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false,
      }),
    },
  },
  {
    initialRouteName: 'Discover',
    backBehavior: 'Discover',
    headerMode: 'screen',
  },
)

export default DiscoverStack
