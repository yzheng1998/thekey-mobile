import React, { Component } from 'react'
import { View } from 'react-native'
import { Container, Title, TitleContainer, DismissButton } from './styles'
import SettingsGear from 'react-native-vector-icons/Feather'
import DownArrow from 'react-native-vector-icons/EvilIcons'
import BackButton from '../../../../../../components/BackButtonRelative'

export default class SettingsHeader extends Component {
  render() {
    const { settingsMain, title, hideSettings, swipe } = this.props
    return (
      <View>
        {settingsMain && (
          <Container>
            <TitleContainer>
              <SettingsGear name="settings" color="black" size={25} />
              <Title>{title}</Title>
            </TitleContainer>
            <DismissButton onPress={hideSettings}>
              <DownArrow
                name="chevron-down"
                color="rgb(176,186,200)"
                size={40}
              />
            </DismissButton>
          </Container>
        )}
        {!settingsMain && (
          <Container>
            <TitleContainer>
              <Title>{title}</Title>
            </TitleContainer>
            <BackButton
              color="rgb(176,186,200)"
              size={25}
              onBackPress={() => swipe('Settings')}
            />
          </Container>
        )}
      </View>
    )
  }
}
