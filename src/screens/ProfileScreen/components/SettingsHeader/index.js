import React, { Component } from 'react'
import { Container, Title, TitleContainer, DismissButton } from './styles'
import SettingsGear from 'react-native-vector-icons/Feather'
import DownArrow from 'react-native-vector-icons/EvilIcons'
import BackButton from '../../../../components/BackButtonRelative'

export default class SettingsHeader extends Component {
  render() {
    const { settingsMain, title, hideSettings, onPress } = this.props
    return (
      <Container>
        <TitleContainer>
          {settingsMain && (
            <SettingsGear name="settings" color="black" size={25} />
          )}
          <Title>{title}</Title>
        </TitleContainer>
        {settingsMain && (
          <DismissButton onPress={hideSettings}>
            <DownArrow name="chevron-down" color="rgb(176,186,200)" size={40} />
          </DismissButton>
        )}
        {!settingsMain && (
          <BackButton
            color="rgb(176,186,200)"
            size={25}
            onBackPress={() => onPress(0)}
          />
        )}
      </Container>
    )
  }
}
