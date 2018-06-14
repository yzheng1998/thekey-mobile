import { createSwitchNavigator, HeaderBackButton } from 'react-navigation'
import React from 'react'
import LoginStack from '../navigation/LoginStack'
import MainTabNavigator from '../navigation/MainTabNavigator'

const RootNavigator = createSwitchNavigator(
  {
    LoginStack: {
      screen: LoginStack,
      navigationOptions: ({ navigation }) => ({
        headerLeft: <HeaderBackButton onPress={() => navigation.goBack()} />,
      }),
    },
    MainTab: {
      screen: MainTabNavigator,
      navigationOptions: ({ navigation }) => ({
        headerLeft: <HeaderBackButton onPress={() => navigation.goBack()} />,
      }),
    },
  },
  {
    initialRouteName: 'LoginStack',
    headerMode: 'screen',
  },
)

export default RootNavigator
