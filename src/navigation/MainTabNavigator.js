import React from 'react'
import { Image } from 'react-native'
import { TabNavigator } from 'react-navigation' // 1.0.0-beta.14
import MainScreen from '../screens/MainScreen/index'
import UsersScreen from '../screens/UsersScreen/'
import placeholder from '../../assets/devlogo.png'

const MainTabNavigator = TabNavigator(
  {
    Discover: {
      screen: MainScreen,
      navigationOptions: () => ({
        title: 'Discover',
        tabBarIcon: () => <Image source={placeholder} size={30} />,
      }),
    },
    Chats: {
      // Random screen/pictures for now
      screen: UsersScreen,
      navigationOptions: () => ({
        title: 'Chats',
        tabBarIcon: () => <Image source={placeholder} size={30} />,
      }),
    },
    Profile: {
      // Random screen/pictures for now
      screen: UsersScreen,
      navigationOptions: () => ({
        title: 'Profile',
        tabBarIcon: () => <Image source={placeholder} size={30} />,
      }),
    },
  },
  {
    initialRouteName: 'Main',

    navigationOptions: () => ({
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

export default MainTabNavigator
