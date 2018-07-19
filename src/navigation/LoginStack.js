import { createStackNavigator } from 'react-navigation'
import LoginScreen from '../screens/LoginScreen/'
import LandingScreen from '../screens/LandingScreen/'
import SignUpScreen from '../screens/SignUpScreen'
import PersonalDetailsScreen from '../screens/PersonalDetailsScreen'
import GenderScreen from '../screens/GenderScreen'
import YourEducationScreen from '../screens/YourEducationScreen'
import EssayScreen from '../screens/EssayScreen'
import InterestsScreen from '../screens/InterestsScreen'
import SkillsScreen from '../screens/SkillsScreen'
import ResumeUploadScreen from '../screens/ResumeUploadScreen'

const LoginStack = createStackNavigator(
  {
    Landing: {
      screen: LandingScreen,
      navigationOptions: () => ({
        title: 'Get Started',
      }),
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    SignUp: {
      screen: SignUpScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    PersonalDetails: {
      screen: PersonalDetailsScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Gender: {
      screen: GenderScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    YourEducation: {
      screen: YourEducationScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Essay: {
      screen: EssayScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Interests: {
      screen: InterestsScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Skills: {
      screen: SkillsScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Resume: {
      screen: ResumeUploadScreen,
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
