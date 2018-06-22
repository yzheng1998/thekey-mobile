import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import React from 'react'
import MessageInput from '../screens/ConversationScreen/components/MessageInput'

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'black',
}
const CenteredView = ({ children }) => <View style={style}>{children}</View>

storiesOf('CenteredView').add('MessageInput', () => (
  <CenteredView>
    <MessageInput />
  </CenteredView>
))
