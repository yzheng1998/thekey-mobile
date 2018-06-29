import React from 'react'
import { createBottomTabNavigator } from 'react-navigation' // 1.0.0-beta.14
import { View, Image } from 'react-native'
import { Button } from 'react-native-elements'
import placeholder from '../../assets/devlogo.png'
import DiscoverStack from '../navigation/DiscoverStack'
import ChatStack from '../navigation/ChatStack'

const MainTabNavigator = createBottomTabNavigator(
  {
    Discover: {
      screen: DiscoverStack,
      navigationOptions: () => ({
        title: 'Discover',
        tabBarIcon: () => (
          <Image source={placeholder} style={{ height: 25, width: 25 }} />
        ),
      }),
    },
    Chats: {
      screen: ChatStack,
      navigationOptions: () => ({
        title: 'Chats',
        tabBarIcon: () => (
          <Image source={placeholder} style={{ height: 25, width: 25 }} />
        ),
      }),
    },
  },
  {
    initialRouteName: 'Discover',
    tabBarOptions: {
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
