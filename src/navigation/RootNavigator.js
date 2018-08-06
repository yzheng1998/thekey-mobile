import { createSwitchNavigator, HeaderBackButton } from 'react-navigation'
import React, { Component } from 'react'
import { AsyncStorage, Alert } from 'react-native'

import LoginStack from '../navigation/LoginStack'
import MainTabNavigator from '../navigation/MainTabNavigator'
import LoadingWrapper from '../components/LoadingWrapper'

const isSignedIn = async () => {
  const token = await AsyncStorage.getItem('token')
  return token !== null
}

const createRootNavigator = (loggedIn = false) =>
  createSwitchNavigator(
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
      initialRouteName: loggedIn ? 'MainTab' : 'LoginStack',
      headerMode: 'screen',
    },
  )

export default class RootNavigator extends Component {
  state = {
    signedIn: false,
    loading: true,
  }

  componentDidMount() {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, loading: false }))
      .catch(() => Alert.alert('An error occurred'))
  }
  render() {
    const { loading, signedIn } = this.state
    if (loading) {
      return <LoadingWrapper loading={loading} />
    }
    const RootNavigatorComponent = createRootNavigator(signedIn)

    return <RootNavigatorComponent />
  }
}
