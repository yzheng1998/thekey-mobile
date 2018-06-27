import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import React from 'react'
import EducationRow from '../screens/ProfileScreen/components/EducationListView/EducationRow'

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
        schoolName="Harvard University"
        degreeType="Bachelors Degree"
        major="Chemical and Physical Biology"
        startYear="2013"
        graduationYear="2017"
      />
    </CenteredView>
  ))
  .add('EducationRow2', () => (
    <CenteredView>
      <EducationRow
        schoolName="Harvard University"
        startYear="2013"
        graduationYear="2017"
      />
    </CenteredView>
  ))
