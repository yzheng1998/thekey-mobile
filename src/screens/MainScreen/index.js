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
      </Background>
    )
  }
}

export default MainScreen
