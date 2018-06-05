import React, { Component } from 'react'
import { Background, NavigateButton, ButtonText } from 'styled-components'

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
      </Background>
    )
  }
}

export default MainScreen
