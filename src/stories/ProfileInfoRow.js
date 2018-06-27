import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import React from 'react'
import ProfileInfoRow from '../components/ProfileInfoRow'

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
}
const CenteredView = ({ children }) => <View style={style}>{children}</View>

storiesOf('CenteredView').add('ProfileInfoRow1', () => (
  <CenteredView>
    <ProfileInfoRow
      title="Harvard University"
      subtitle1="Bachelors Degree"
      subtitle2="East Asian Studies"
      yearStart="2013"
      yearEnd="2017"
      badge={{
        uri:
          'https://logoeps.com/wp-content/uploads/2012/07/harvard-university-logo-vector-01.png',
      }}
    />
  </CenteredView>
))