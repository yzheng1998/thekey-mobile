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
          onPress={() => this.props.navigation.navigate('UserListView')}
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
