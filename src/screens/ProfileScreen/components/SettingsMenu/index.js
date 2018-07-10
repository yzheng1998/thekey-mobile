import React, { Component } from 'react'
import { Container, Menu, Title } from './styles'
import SettingsHeader from '../SettingsHeader'
import SettingsMenuItem from '../SettingsMenuItem'

export default class SettingsMenu extends Component {
  render() {
    return (
      <Container>
        <Menu>
          <SettingsHeader />
          <SettingsMenuItem title="Password" />
        </Menu>
      </Container>
    )
  }
}
