import React, { Component } from 'react'
import { Background, NavigateButton, ButtonText } from './styles'
import { Button } from 'react-native'

class MainScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Main Screen',
  }

  render() {
    return (
      <Background>
        <NavigateButton>
          <ButtonText>Go SomeWhere</ButtonText>
        </NavigateButton>
        <Button
          title="View All Users"
          onPress={() => this.props.navigation.navigate('UserListView')}
        />
        <Button
          title="View All Events"
          onPress={() => this.props.navigation.navigate('Events')}
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
