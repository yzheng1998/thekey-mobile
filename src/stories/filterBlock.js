import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { View } from 'react-native'
import FilterBlock from '../screens/ReviewScreen/components/FilterBlock'

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
}
const CenteredView = ({ children }) => <View style={style}>{children}</View>

storiesOf('CenteredView').add('FilterBlock', () => (
  <CenteredView>
    <FilterBlock />
  </CenteredView>
))
