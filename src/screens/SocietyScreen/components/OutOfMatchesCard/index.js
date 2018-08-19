import React, { Component } from 'react'
import { CardContainer, BoldText } from './styles'
import RegisterButton from '../../../../components/RegisterButton'
import nodeEmoji from 'node-emoji'

export default class SocietyCard extends Component {
  render() {
    return (
      <CardContainer>
        <BoldText>
          {nodeEmoji.get('sunglasses')} You have reviewed all possible
          connections!
        </BoldText>
        <RegisterButton
          onPress={() => this.props.navigation.navigate('Discover')}
          buttonText="BACK TO DISCOVER"
        />
      </CardContainer>
    )
  }
}
