import React, { Component } from 'react'
import { Screen } from '../../../../styles'
import Logout from './Screens/Logout'
import Password from './Screens/Password'
import Resumes from './Screens/Resumes'

export default class SettingsScreens extends Component {
  render() {
    const { id, navigation, resumes, userId, refetch, swipe } = this.props
    const settingsScreens = [
      { id: 0, screen: null },
      { id: 1, screen: <Password onPress={() => swipe('Settings')} /> },
      { id: 2, screen: <Logout navigation={navigation} /> },
      {
        id: 3,
        screen: <Resumes resumes={resumes} userId={userId} refetch={refetch} />,
      },
    ]
    return <Screen>{settingsScreens.find(el => el.id === id).screen}</Screen>
  }
}
