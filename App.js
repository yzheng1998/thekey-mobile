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

const getPosition = () => {
  navigator.geolocation.getCurrentPosition(
    async position => {
      await AsyncStorage.setItem(
        'latitude',
        JSON.stringify(position.coords.latitude),
      )
      await AsyncStorage.setItem(
        'longitude',
        JSON.stringify(position.coords.longitude),
      )
    },
    error => this.setState({ error: error.message }),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
  )
}

export default class App extends Component {
  state = {
    error: null,
    appState: AppState.currentState,
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange)
    getPosition()
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange)
  }

  handleAppStateChange = nextAppState => {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      getPosition()
    }
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
