import React, { Component } from 'react'
import {
  MenuItemList,
  EmailAddress,
  CancelMembershipButton,
  ButtonText,
} from '../../../../styles'
import NavigationArrow from 'react-native-vector-icons/EvilIcons'
import SettingsMenuItem from '../SettingsMenuItem'
import UserPreferenceSwitch from '../../../UserPreferenceSwitch'

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
    const { email, swipe, emailPreferences, newsLetterPreferences } = this.props
    return (
      <MenuItemList showsVerticalScrollIndicator={false}>
        <SettingsMenuItem title="Email Address" disabled>
          <EmailAddress>{email}</EmailAddress>
        </SettingsMenuItem>
        <SettingsMenuItem title="Enable Email Notifications" disabled>
          <UserPreferenceSwitch
            selected={emailPreferences}
            settingName="emailPreferences"
          />
        </SettingsMenuItem>
        <SettingsMenuItem title="Recieve Monthly Newsletter" disabled>
          <UserPreferenceSwitch
            selected={newsLetterPreferences}
            settingName="newsLetterPreferences"
          />
        </SettingsMenuItem>
        <MenuItemWithNavigation
          title="Resume"
          onPress={() => swipe('Resumes')}
        />
        <MenuItemWithNavigation
          title="Password"
          onPress={() => swipe('Password')}
        />
        <MenuItemWithNavigation
          title="Terms Of Service"
          onPress={() => swipe('Terms Of Service')}
        />
        <MenuItemWithNavigation
          title="Privacy Policy"
          onPress={() => swipe('Privacy Policy')}
        />
        <MenuItemWithNavigation
          title="Logout"
          onPress={() => swipe('Logout')}
        />
        <CancelMembershipButton>
          <ButtonText>CANCEL MEMBERSHIP</ButtonText>
        </CancelMembershipButton>
      </MenuItemList>
    )
  }
}
