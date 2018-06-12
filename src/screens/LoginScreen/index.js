import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import LinkedInModal from 'react-native-linkedin'

class LoginScreen extends Component {
  render() {
    return (
      <View>
        <LinkedInModal
          clientID="[ Your client id from https://www.linkedin.com/developer/apps ]"
          clientSecret="[ Your client secret from https://www.linkedin.com/developer/apps ]"
          redirectUri="[ Your redirect uri set into https://www.linkedin.com/developer/apps ]"
          onSuccess={token => console.log(token)}
        />
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
