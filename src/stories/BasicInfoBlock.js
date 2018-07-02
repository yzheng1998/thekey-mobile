import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import React from 'react'
import BasicInfoBlock from '../screens/EditProfileScreen/components/BasicInfoBlock'

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
}
const CenteredView = ({ children }) => <View style={style}>{children}</View>

storiesOf('CenteredView').add('BasicInfoBlock', () => (
  <CenteredView>
    <BasicInfoBlock />
  </CenteredView>
))
