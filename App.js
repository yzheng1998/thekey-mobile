import React, { Component } from 'react'
import RootNavigator from './src/navigation/RootNavigator'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components/native'
import { client } from './src/apollo'
import theme from './theme'
import * as pushNotifications from './src/services/pushNotifications'

pushNotifications.configure()

import { Provider } from 'react-redux'
import store from './src/redux/store'

export default class App extends Component {
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
