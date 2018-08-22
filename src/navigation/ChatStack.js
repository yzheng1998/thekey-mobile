import { createStackNavigator } from 'react-navigation'
import NetworkScreen from '../screens/NetworkScreen'
import ConversationScreen from '../screens/ConversationScreen'
import ChatMembersScreen from '../screens/ChatMembersScreen'
import MemberScreen from '../screens/MemberScreen'
import PeopleList from '../screens/PeopleList'

const ChatStack = createStackNavigator(
  {
    Network: {
      screen: NetworkScreen,
      navigationOptions: () => ({
        title: 'Your Network',
        gesturesEnabled: false,
      }),
    },
    Conversation: {
      screen: ConversationScreen,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false,
      }),
    },
    ChatMembers: {
      screen: ChatMembersScreen,
      navigationOptions: () => ({
        header: null,
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
    PeopleList: {
      screen: PeopleList,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false,
      }),
    },
  },
  {
    initialRouteName: 'Network',
    backBehavior: 'Network',
    headerMode: 'screen',
  },
)

ChatStack.navigationOptions = ({ navigation }) => ({
  tabBarVisible: navigation.state.index === 0,
})
export default ChatStack
