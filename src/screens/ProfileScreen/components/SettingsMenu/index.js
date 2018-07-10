import React, { Component } from 'react'
import {
  Container,
  Menu,
  MenuItemList,
  CancelMembershipButton,
  ButtonText,
} from './styles'
import SettingsHeader from '../SettingsHeader'
import SettingsMenuItem from '../SettingsMenuItem'

export default class SettingsMenu extends Component {
  render() {
    return (
      <Container>
        <Menu>
          <SettingsHeader />
          <MenuItemList>
            <SettingsMenuItem title="Email Address" />
            <SettingsMenuItem title="Enable Email Notifications" />
            <SettingsMenuItem title="Recieve Monthly Newsletter" />
            <SettingsMenuItem title="Password" />
            <SettingsMenuItem title="About" />
            <SettingsMenuItem title="Terms Of Service" />
            <SettingsMenuItem title="Privacy Policy" />
            <SettingsMenuItem title="FAQ's" />
            <SettingsMenuItem title="Contact Us" />
            <SettingsMenuItem title="Restore Purchase" />
            <SettingsMenuItem title="Logout" />
            <CancelMembershipButton>
              <ButtonText>CANCEL MEMBERSHIP</ButtonText>
            </CancelMembershipButton>
          </MenuItemList>
        </Menu>
      </Container>
    )
  }
}
