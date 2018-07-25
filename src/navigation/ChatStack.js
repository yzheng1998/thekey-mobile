import { createStackNavigator } from 'react-navigation'
import NetworkScreen from '../screens/NetworkScreen'
import ConversationScreen from '../screens/ConversationScreen'
import GroupMembersScreen from '../screens/GroupMembersScreen'
import MemberScreen from '../screens/MemberScreen'

const ChatStack = createStackNavigator(
  {
    Network: {
      screen: NetworkScreen,
      navigationOptions: () => ({
        title: 'Your Network',
      }),
    },
    Conversation: {
      screen: ConversationScreen,
      navigationOptions: () => ({ header: null }),
    },
    GroupMembers: {
      screen: GroupMembersScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Member: {
      screen: MemberScreen,
      navigationOptions: () => ({
        header: null,
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
