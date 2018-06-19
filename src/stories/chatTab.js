import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import React from 'react'
import ChatTab from '../components/ChatTab'

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
}
const CenteredView = ({ children }) => <View style={style}>{children}</View>

storiesOf('CenteredView').add('default view', () => (
  <CenteredView>
    <ChatTab options={['All', 'Connection', 'Groups', 'Events']} />
  </CenteredView>
))
