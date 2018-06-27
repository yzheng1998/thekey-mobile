import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import React from 'react'
import EducationRow from '../screens/ProfileScreen/components/EducationRow'

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
}
const CenteredView = ({ children }) => <View style={style}>{children}</View>

storiesOf('CenteredView')
  .add('EducationRow1', () => (
    <CenteredView>
      <EducationRow
        university="Harvard University"
        degree="Bachelors Degree"
        major="East Asian Studies"
        yearStart="2013"
        yearEnd="2017"
        badge={{
          uri:
            'https://logoeps.com/wp-content/uploads/2012/07/harvard-university-logo-vector-01.png',
        }}
      />
    </CenteredView>
  ))
  .add('EducationRow2', () => (
    <CenteredView>
      <EducationRow
        university="Harvard University"
        yearStart="2013"
        yearEnd="2017"
        badge={{
          uri:
            'https://logoeps.com/wp-content/uploads/2012/07/harvard-university-logo-vector-01.png',
        }}
      />
    </CenteredView>
  ))
