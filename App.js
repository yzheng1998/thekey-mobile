import React, { Component } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import config from './config'
import RootNavigator from './src/navigation/RootNavigator'
import { AsyncStorage } from 'react-native'

const client = new ApolloClient({
  uri: config.graphqlUrl,
  request: async operation => {
    const token = await AsyncStorage.getItem('token')
    operation.setContext({
      headers: {
        authorization: token,
      },
    })
  },
})

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <RootNavigator />
      </ApolloProvider>
    )
  }
}
