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
      navigationOptions: () => ({
        title: 'Message Thread',
      }),
    },
  },
  {
    initialRouteName: 'Network',
    backBehavior: 'Network',
    headerMode: 'screen',
  },
)

export default ChatStack
