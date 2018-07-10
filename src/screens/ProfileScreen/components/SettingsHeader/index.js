import React, { Component } from 'react'
import { Container, Title, TitleContainer, DismissButton } from './styles'
import SettingsGear from 'react-native-vector-icons/Feather'
import DownArrow from 'react-native-vector-icons/EvilIcons'

export default class SettingsMenu extends Component {
  render() {
    return (
      <Container>
        <TitleContainer>
          <SettingsGear name="settings" color="black" size={25} />
          <Title>Settings</Title>
        </TitleContainer>
        <DismissButton>
          <DownArrow name="chevron-down" color="black" size={40} />
        </DismissButton>
      </Container>
    )
  }
}
