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

export default class SettingsMenu extends Component {
  render() {
    return (
      <Container>
        <Menu>
          <SettingsHeader />
          <MenuItemList>
            <SettingsMenuItem title="Email Address">
              <EmailAddress>{this.props.email}</EmailAddress>
            </SettingsMenuItem>
            <SettingsMenuItem title="Enable Email Notifications" />
            <SettingsMenuItem title="Recieve Monthly Newsletter" />
            <SettingsMenuItem title="Password">
              <NavigationArrow
                name="chevron-right"
                color="rgb(176,186,200)"
                size={32}
                style={{ marginRight: -11 }}
              />
            </SettingsMenuItem>
            <SettingsMenuItem title="About">
              <NavigationArrow
                name="chevron-right"
                color="rgb(176,186,200)"
                size={35}
                style={{ marginRight: -11 }}
              />
            </SettingsMenuItem>
            <SettingsMenuItem title="Terms Of Service">
              <NavigationArrow
                name="chevron-right"
                color="rgb(176,186,200)"
                size={35}
                style={{ marginRight: -11 }}
              />
            </SettingsMenuItem>
            <SettingsMenuItem title="Privacy Policy">
              <NavigationArrow
                name="chevron-right"
                color="rgb(176,186,200)"
                size={35}
                style={{ marginRight: -11 }}
              />
            </SettingsMenuItem>
            <SettingsMenuItem title="FAQ's">
              <NavigationArrow
                name="chevron-right"
                color="rgb(176,186,200)"
                size={35}
                style={{ marginRight: -11 }}
              />
            </SettingsMenuItem>
            <SettingsMenuItem title="Contact Us">
              <NavigationArrow
                name="chevron-right"
                color="rgb(176,186,200)"
                size={35}
                style={{ marginRight: -11 }}
              />
            </SettingsMenuItem>
            <SettingsMenuItem title="Restore Purchase">
              <NavigationArrow
                name="chevron-right"
                color="rgb(176,186,200)"
                size={35}
                style={{ marginRight: -11 }}
              />
            </SettingsMenuItem>
            <SettingsMenuItem title="Logout">
              <NavigationArrow
                name="chevron-right"
                color="rgb(176,186,200)"
                size={35}
                style={{ marginRight: -11 }}
              />
            </SettingsMenuItem>
            <CancelMembershipButton>
              <ButtonText>CANCEL MEMBERSHIP</ButtonText>
            </CancelMembershipButton>
          </MenuItemList>
        </Menu>
      </Container>
    )
  }
}
