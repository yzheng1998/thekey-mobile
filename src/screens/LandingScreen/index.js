import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { pushNotifications } from '../../services'

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
          title="Splash"
          onPress={() => this.props.navigation.navigate('Splash')}
        />
        <Button
          // For testing the rest of the app bc don't have login functionality yet
          title="Main Page (for testing)"
          onPress={() => this.props.navigation.navigate('MainTab')}
        />
        <Button
          // For testing the rest of the app bc don't have login functionality yet
          title="Send localPush Notification"
          onPress={() => pushNotifications.localNotification()}
        />
      </View>
    )
  }
}

export default LandingScreen
