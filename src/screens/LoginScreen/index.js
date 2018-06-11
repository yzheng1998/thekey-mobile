import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'

class LoginScreen extends Component {
  render() {
    return (
      <View>
        <Text>Temporary Login Screen</Text>
        <Button
          title="Go on to main screen as if you logged in"
          onPress={() => this.props.navigation.navigate('MainTab')}
        />{' '}
      </View>
    )
  }
}

export default LoginScreen
