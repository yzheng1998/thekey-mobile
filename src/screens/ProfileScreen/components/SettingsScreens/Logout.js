import React, { Component } from 'react'
import { ModalScreenContainer } from '../../styles'
import RegisterButton from '../../../../components/RegisterButton'

export default class Logout extends Component {
  render() {
    return (
      <ModalScreenContainer>
        <RegisterButton buttonText="LOGOUT" onPress={this.props.onPress} />
      </ModalScreenContainer>
    )
  }
}
