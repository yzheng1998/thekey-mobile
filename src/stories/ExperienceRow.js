import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import React from 'react'
import ExperienceRow from '../screens/ProfileScreen/components/ExperienceRow'

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
      company="Unfiltered Network"
      position="CEO"
      yearStart="2016"
      yearEnd="Present / 1yr 9 mos"
      badge={{
        uri:
          'https://logoeps.com/wp-content/uploads/2012/07/harvard-university-logo-vector-01.png',
      }}
    />
  </CenteredView>
))
