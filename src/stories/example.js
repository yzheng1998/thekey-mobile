import { storiesOf } from '@storybook/react-native'
import { View, Text } from 'react-native'
import React from 'react'

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
}
const CenteredView = ({ children }) => <View style={style}>{children}</View>

storiesOf('CenteredView').add('default view', () => (
  <CenteredView>
    <Text>Hello Storybook</Text>
  </CenteredView>
))
