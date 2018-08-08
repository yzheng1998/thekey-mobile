import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import React from 'react'
import SettingsMenu from '../screens/ProfileScreen/components/Settings/components/SettingsMenu'

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
}
const CenteredView = ({ children }) => <View style={style}>{children}</View>

storiesOf('CenteredView').add('SettingsMenu', () => (
  <CenteredView>
    <SettingsMenu email="diego.o.co@gmail.com" />
  </CenteredView>
))
