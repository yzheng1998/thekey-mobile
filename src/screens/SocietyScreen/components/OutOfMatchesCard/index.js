import React, { Component } from 'react'
import { CardContainer, BoldText } from './styles'
import RegisterButton from '../../../../components/RegisterButton'

export default class SocietyCard extends Component {
  render() {
    return (
      <CardContainer>
        <BoldText>You have reviewed all possible connections!</BoldText>
        <BoldText>Come back later to connect to more users.</BoldText>
        <RegisterButton
          onPress={() => this.props.navigation.navigate('Discover')}
          buttonText="BACK TO DISCOVER"
        />
      </CardContainer>
    )
  }
}
