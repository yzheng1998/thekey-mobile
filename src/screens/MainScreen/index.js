import React, { Component } from 'react'
import { Background } from './styles'
import { Button } from 'react-native-elements'

class MainScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Main Screen',
  }

  render() {
    return (
      <Background>
        <Button
          title="View All Users"
          onPress={() => this.props.navigation.navigate('Users')}
        />
        <Button
          title="View All Events"
          onPress={() => this.props.navigation.navigate('Events')}
        />
        <Button
          title="View All Jobs"
          onPress={() => this.props.navigation.navigate('Jobs')}
        />
        <Button
          title="Register"
          onPress={() => this.props.navigation.navigate('Register')}
        >
          Register
        </Button>
      </Background>
    )
  }
}

export default MainScreen
