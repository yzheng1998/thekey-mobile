import React from 'react'
import { createBottomTabNavigator } from 'react-navigation' // 1.0.0-beta.14
import { View, Image } from 'react-native'
import { Button } from 'react-native-elements'
import placeholder from '../../assets/devlogo.png'
import EventsScreen from '../screens/EventsScreen'
import DiscoverStack from '../navigation/DiscoverStack'
import ChatStack from '../navigation/ChatStack'

const MainTabNavigator = createBottomTabNavigator(
  {
    Discover: {
      screen: DiscoverStack,
      navigationOptions: () => ({
        title: 'Discover',
        tabBarIcon: () => <Image source={placeholder} size={30} />,
      }),
    },
    Chats: {
      screen: ChatStack,
      navigationOptions: () => ({
        title: 'Chats',
        tabBarIcon: () => <Image source={placeholder} size={30} />,
      }),
    },
    Profile: {
      // Temporary Screen here
      screen: EventsScreen,
      navigationOptions: () => ({
        title: 'Profile',
        tabBarIcon: () => <Image source={placeholder} size={30} />,
      }),
    },
  },
  {
    initialRouteName: 'Discover',
    tabBarOptions: {
      style: {
        backgroundColor: 'white',
      },
    },
    navigationOptions: () => ({
      headerRight: <Button />,
      headerStyle: { backgroundColor: '#545680' },
      headerTintColor: 'white',
      headerTitleStyle: {
        textAlign: 'center',
        alignSelf: 'center',
        marginBottom: 5,
        fontFamily: 'Circular Std',
        fontSize: 19,
        lineHeight: 26,
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
