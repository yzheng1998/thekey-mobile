import React, { Component } from 'react'
import { ModalScreenContainer } from '../../../../../styles'
import RegisterButton from '../../../../../../../components/RegisterButton'
import { client } from '../../../../../../../apollo'
import { AsyncStorage } from 'react-native'

export default class Logout extends Component {
  logout = async () => {
    await AsyncStorage.clear()
    client.resetStore()
    this.props.navigation.navigate('Landing')
  }

  render() {
    return (
      <ModalScreenContainer>
        <RegisterButton buttonText="LOGOUT" onPress={this.logout} />
      </ModalScreenContainer>
    )
  }
}
