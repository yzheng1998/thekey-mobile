import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import React from 'react'
import YourEducationScreen from '../screens/YourEducationScreen'

const style = {
  flex: 1,
  backgroundColor: '#F5FCFF',
}
const CenteredView = ({ children }) => <View style={style}>{children}</View>

storiesOf('CenteredView').add('YourEducationScreen', () => (
  <CenteredView>
    <YourEducationScreen />
  </CenteredView>
))
