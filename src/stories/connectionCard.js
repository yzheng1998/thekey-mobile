import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import React from 'react'
import Jon from '../../assets/Jon.jpg'
import ConnectionCard from '../components/ConnectionCard'

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'black',
}
const CenteredView = ({ children }) => <View style={style}>{children}</View>

storiesOf('CenteredView').add('ConnectionCard', () => (
  <CenteredView>
    <ConnectionCard
      name="Jon Snow"
      timeStamp="2018-06-12 09:18:47.822-04"
      message="Have you learnt to bend the knee?"
      profileImage={Jon}
    />
  </CenteredView>
))
