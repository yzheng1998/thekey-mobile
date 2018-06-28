import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import React from 'react'
import ExperienceRow from '../screens/ProfileScreen/components/ExperienceListView/ExperienceRow'

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
}
const CenteredView = ({ children }) => <View style={style}>{children}</View>

storiesOf('CenteredView').add('ExperienceRow1', () => (
  <CenteredView>
    <ExperienceRow
      companyName="Unfiltered Network"
      position="CEO"
      startYear="2016"
      endYear="Present / 1yr 9 mos"
    />
  </CenteredView>
))
