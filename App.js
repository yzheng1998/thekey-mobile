import React, { Component } from 'react'
import RootNavigator from './src/navigation/RootNavigator'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components/native'
import { client } from './src/apollo'
import theme from './theme'
import * as pushNotifications from './src/services/pushNotifications'

pushNotifications.configure()

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <RootNavigator />
        </ThemeProvider>
      </ApolloProvider>
    )
  }
}
