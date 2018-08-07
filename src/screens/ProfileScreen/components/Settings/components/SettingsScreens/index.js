import React, { Component } from 'react'
import { Screen } from '../../../../styles'
import Logout from './Screens/Logout'
import Password from './Screens/Password'

export default class SettingsScreens extends Component {
  render() {
    const { id, navigation } = this.props
    const settingsScreens = [
      { id: 0, screen: null },
      { id: 1, screen: <Password /> },
      { id: 2, screen: <Logout navigation={navigation} /> },
    ]
    return <Screen>{settingsScreens.find(el => el.id === id).screen}</Screen>
  }
}
