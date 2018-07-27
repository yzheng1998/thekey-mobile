import React from 'react'
import { createBottomTabNavigator } from 'react-navigation' // 1.0.0-beta.14
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import DiscoverStack from '../navigation/DiscoverStack'
import ChatStack from '../navigation/ChatStack'
import Compass from 'react-native-vector-icons/Feather'
import ChatBubble from 'react-native-vector-icons/MaterialCommunityIcons'

const MainTabNavigator = createBottomTabNavigator(
  {
    Discover: {
      screen: DiscoverStack,
      navigationOptions: () => ({
        title: null,
        tabBarIcon: ({ focused }) =>
          focused ? (
            <Compass name="compass" size={25} color="rgb(250,53,121)" />
          ) : (
            <Compass name="compass" size={25} color="rgb(148,157,170)" />
          ),
      }),
    },
    Chats: {
      screen: ChatStack,
      navigationOptions: () => ({
        title: null,
        tabBarIcon: ({ focused }) =>
          focused ? (
            <ChatBubble name="message" size={25} color="rgb(250,53,121)" />
          ) : (
            <ChatBubble
              name="message-outline"
              size={25}
              color="rgb(148,157,170)"
            />
          ),
      }),
    },
  },
  {
    initialRouteName: 'Discover',
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: 'white',
        height: 40,
      },
    },
    navigationOptions: () => ({
      headerRight: <Button />,
      headerTintColor: 'white',
      headerTitleStyle: {
        textAlign: 'center',
        alignSelf: 'center',
        marginBottom: 0,
        fontFamily: 'Circular Std',
        fontSize: 19,
        lineHeight: 20,
      },
    }),
    headerMode: 'screen',
  },
)

class MainTabWrapper extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MainTabNavigator navigation={this.props.navigation} />
      </View>
    )
  }
}

MainTabWrapper.router = MainTabNavigator.router

export default MainTabWrapper
