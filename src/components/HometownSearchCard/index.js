import React, { Component } from 'react'
import { Container, InfoContainer, City, State } from './styles'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

export default class HometownSearchCard extends Component {
  render() {
    const { onPress, city, state } = this.props
    return (
      <Container onPress={() => onPress({ hometown: `${city}, ${state}` })}>
        <Icon
          name="location-pin"
          size={30}
          color="rgb(211, 216, 223)"
          style={{ marginLeft: 14 }}
        />
        <InfoContainer>
          <City>{city}</City>
          <State>{state}</State>
        </InfoContainer>
      </Container>
    )
  }
}
