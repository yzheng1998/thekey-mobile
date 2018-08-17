import React, { Component } from 'react'
import {
  Container,
  TitleRow,
  BackButton,
  Title,
  InstructionText,
  Divider,
} from './styles'
import BackButtonIcon from 'react-native-vector-icons/Ionicons'

export default class SwitchList extends Component {
  render() {
    const { title, goBack } = this.props
    return (
      <Container>
        <TitleRow>
          <BackButton onPress={goBack}>
            <BackButtonIcon name="ios-arrow-back" size={27} color="black" />
          </BackButton>
          <Title>{title}</Title>
        </TitleRow>
        <InstructionText>You can select up to 3 options</InstructionText>
        <Divider />
      </Container>
    )
  }
}
