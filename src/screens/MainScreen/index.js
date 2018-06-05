import React, { Component } from 'react'
<<<<<<< HEAD
import { Background, NavigateButton, ButtonText } from './styles'
import { Button } from 'react-native'
=======
import { Background } from './styles'
import { Button } from 'react-native-elements'
>>>>>>> 6e6c1a9... Added registration to the mainscreen

class MainScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Main Screen',
  }

  render() {
    return (
      <Background>
<<<<<<< HEAD
        <NavigateButton>
          <ButtonText>Go SomeWhere</ButtonText>
        </NavigateButton>
        <Button
          title="View All Users"
          onPress={() => this.props.navigation.navigate('Users')}
        />
=======
        <Button
          title="Register"
          onPress={() => this.props.navigation.navigate('Register')}
        >
          Register
        </Button>
>>>>>>> 6e6c1a9... Added registration to the mainscreen
      </Background>
    )
  }
}

export default MainScreen
