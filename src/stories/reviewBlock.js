import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import React from 'react'
import ReviewBlock from '../screens/ReviewScreen/components/ReviewBlock'

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
}
const CenteredView = ({ children }) => <View style={style}>{children}</View>

storiesOf('CenteredView').add('ReviewBlock', () => (
  <CenteredView>
    <ReviewBlock />
  </CenteredView>
))
