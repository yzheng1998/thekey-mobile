import { createStackNavigator } from 'react-navigation'
import NetworkScreen from '../screens/NetworkScreen'
import ConversationScreen from '../screens/ConversationScreen'

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
