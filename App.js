import React, { Component } from 'react'
import RootNavigator from './src/navigation/RootNavigator'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components/native'
import { client } from './src/apollo'
import theme from './theme'
import * as pushNotifications from './src/services/pushNotifications'
import { AppState, AsyncStorage } from 'react-native'

pushNotifications.configure()

import { Provider } from 'react-redux'
import store from './src/redux/store'
import { setPosition } from './AppUtilities/geolocation'

import Permissions from 'react-native-permissions'

export default class App extends Component {
  state = {
    error: null,
    appState: AppState.currentState,
  }

  componentDidMount = async () => {
    const token = await AsyncStorage.getItem('token')
    if (token !== null) {
      Permissions.check('location').then(response => {
        if (response === 'authorized') {
          AppState.addEventListener('change', this.handleAppStateChange)
          setPosition()
        }
      })
    }
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange)
  }

  handleAppStateChange = nextAppState => {
    Permissions.check('location').then(response => {
      if (
        this.state.appState.match(/inactive|background/) &&
        nextAppState === 'active' &&
        response === 'authorized'
      ) {
        setPosition()
      }
    })
    this.setState({ appState: nextAppState })
  }

  render() {
    return (
      <Provider store={store}>
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            <RootNavigator />
          </ThemeProvider>
        </ApolloProvider>
      </Provider>
    )
  }
}
