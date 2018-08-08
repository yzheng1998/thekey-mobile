import React, { Component } from 'react'
import { Screen } from '../../../../styles'
import Logout from './Screens/Logout'
import Password from './Screens/Password'
import Resumes from './Screens/Resumes'

export default class SettingsScreens extends Component {
  render() {
    const { id, navigation, resumes } = this.props
    const settingsScreens = [
      { id: 0, screen: null },
      { id: 1, screen: <Password /> },
      { id: 2, screen: <Logout navigation={navigation} /> },
      { id: 3, screen: <Resumes resumes={resumes} /> },
    ]
    return <Screen>{settingsScreens.find(el => el.id === id).screen}</Screen>
  }
}
