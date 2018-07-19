import React, { Component } from 'react'
import {
  Container,
  Menu,
  MenuItemList,
  EmailAddress,
  CancelMembershipButton,
  ButtonText,
} from './styles'
import NavigationArrow from 'react-native-vector-icons/EvilIcons'
import SettingsHeader from '../SettingsHeader'
import SettingsMenuItem from '../SettingsMenuItem'
import Switch from 'react-native-switch-pro'

const MenuItemWithNavigation = ({ title, onPress }) => (
  <SettingsMenuItem title={title} onPress={onPress}>
    <NavigationArrow
      name="chevron-right"
      color="rgb(176,186,200)"
      size={32}
      style={{ marginRight: -11 }}
    />
  </SettingsMenuItem>
)

export default class SettingsMenu extends Component {
  render() {
    const { hideSettings, email } = this.props
    return (
      <Container>
        <Menu>
          <SettingsHeader hideSettings={hideSettings} />
          <MenuItemList>
            <SettingsMenuItem title="Email Address" disabled>
              <EmailAddress>{email}</EmailAddress>
            </SettingsMenuItem>
            <SettingsMenuItem title="Enable Email Notifications" disabled>
              <Switch backgroundActive="rgb(250,53,121)" />
            </SettingsMenuItem>
            <SettingsMenuItem title="Recieve Monthly Newsletter" disabled>
              <Switch backgroundActive="rgb(250,53,121)" />
            </SettingsMenuItem>
            <MenuItemWithNavigation title="Password" />
            <MenuItemWithNavigation title="About" />
            <MenuItemWithNavigation title="Terms Of Service" />
            <MenuItemWithNavigation title="Privacy Policy" />
            <MenuItemWithNavigation title="FAQ's" />
            <MenuItemWithNavigation title="Contact Us" />
            <MenuItemWithNavigation title="Restore Purchase" />
            <MenuItemWithNavigation title="Logout" />
            <CancelMembershipButton>
              <ButtonText>CANCEL MEMBERSHIP</ButtonText>
            </CancelMembershipButton>
          </MenuItemList>
        </Menu>
      </Container>
    )
  }
}
