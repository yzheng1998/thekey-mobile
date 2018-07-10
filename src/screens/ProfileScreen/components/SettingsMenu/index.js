import React, { Component } from 'react'
import { Container, Menu } from './styles'
import SettingsHeader from '../SettingsHeader'

export default class SettingsMenu extends Component {
  render() {
    return (
      <Container>
        <Menu>
          <SettingsHeader />
        </Menu>
      </Container>
    )
  }
}
