import { createStackNavigator, HeaderBackButton } from 'react-navigation'
import React from 'react'

import MainScreen from '../screens/MainScreen/index'
import RegisterScreen from '../screens/RegisterScreen/'
import LoginScreen from '../screens/LoginScreen/'

const AppNavigator = createStackNavigator(
  {
    Landing: {
      // Random screen for now bc we don't have landing page yet
      screen: LoginScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: <HeaderBackButton onPress={() => navigation.goBack()} />,
      }),
    },

    Register: {
      screen: RegisterScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: <HeaderBackButton onPress={() => navigation.goBack()} />,
      }),
    },
    MainTab: {
      screen: MainScreen,
    },
  },
  {
    headerMode: 'screen',
  },
)

export default AppNavigator
