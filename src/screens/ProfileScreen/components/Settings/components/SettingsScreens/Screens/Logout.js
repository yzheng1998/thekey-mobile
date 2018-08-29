import React, { Component } from 'react'
import { ModalScreenContainer } from '../../../../../styles'
import RegisterButton from '../../../../../../../components/RegisterButton'
import { client } from '../../../../../../../apollo'
import { View, AsyncStorage } from 'react-native'

export default class Logout extends Component {
  logout = async () => {
    await AsyncStorage.clear()
    client.resetStore()
    this.props.navigation.navigate('Splash')
  }

  render() {
    return (
      <ModalScreenContainer>
        <View style={{ paddingLeft: 12, paddingRight: 12 }}>
          <RegisterButton buttonText="LOGOUT" onPress={this.logout} />
        </View>
      </ModalScreenContainer>
    )
  }
}
