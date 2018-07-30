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
import ApplyNowScreen from '../screens/ApplyNowScreen'
import SimilarJobsScreen from '../screens/SimilarJobsScreen'
import SimilarEventsScreen from '../screens/SimilarEventsScreen'
import PeopleList from '../screens/PeopleList'
import MemberScreen from '../screens/MemberScreen'
import EditProfileScreen from '../screens/EditProfileScreen'
import AddEducationForm from '../screens/EditProfileScreen/components/AddEducationForm'
import AddExperienceForm from '../screens/EditProfileScreen/components/AddExperienceForm'
import AddCompanyReviewScreen from '../screens/AddCompanyReviewScreen'
import QRScannerScreen from '../screens/QRScannerScreen'

const DiscoverStack = createStackNavigator(
  {
    Discover: {
      screen: DiscoverScreen,
      navigationOptions: () => ({
        title: 'View Options',
      }),
    },
    Society: {
      screen: SocietyScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    User: {
      screen: UserScreen,
      navigationOptions: () => ({
        title: 'View User',
      }),
    },
    Member: {
      screen: MemberScreen,
      navigationOptions: () => ({
        header: null,
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
        header: null,
      }),
    },
    Jobs: {
      screen: JobsScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Job: {
      screen: JobScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Summary: {
      screen: Summary,
      navigationOptions: () => ({
        title: 'Job Summary',
        header: null,
      }),
    },
    Reviews: {
      screen: ReviewsScreen,
      navigationOptions: () => ({ header: null }),
    },
    Review: {
      screen: ReviewScreen,
      navigationOptions: () => ({ header: null }),
    },
    FriendRequests: {
      screen: FriendRequestScreen,
      navigationOptions: () => ({
        title: 'View Friend Requests',
      }),
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    EditProfile: {
      screen: EditProfileScreen,
      navigationOptions: () => ({
        title: 'Edit Profile',
      }),
    },
    AddEducation: {
      screen: AddEducationForm,
      navigationOptions: () => ({
        header: null,
      }),
    },
    AddExperience: {
      screen: AddExperienceForm,
      navigationOptions: () => ({
        header: null,
      }),
    },
    AddCompanyReview: {
      screen: AddCompanyReviewScreen,
      navigationOptions: () => ({
        title: 'Add Company Review',
      }),
    },
    ApplyNow: {
      screen: ApplyNowScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    SimilarJobsScreen: {
      screen: SimilarJobsScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    SimilarEventsScreen: {
      screen: SimilarEventsScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    PeopleList: {
      screen: PeopleList,
      navigationOptions: () => ({
        header: null,
      }),
    },
    QRScanner: {
      screen: QRScannerScreen,
      navigationOptions: () => ({
        header: null,
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
