import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'

class LandingScreen extends Component {
  render() {
    return (
      <View>
        <Text>The Key</Text>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
        <Button
          title="Apply"
          onPress={() => this.props.navigation.navigate('SignUp')}
        />
        <Button
          // For testing the rest of the app bc don't have login functionality yet
          title="Main Page (for testing)"
          onPress={() => this.props.navigation.navigate('MainTab')}
        />
      </View>
    )
  }
}

export default LandingScreen
