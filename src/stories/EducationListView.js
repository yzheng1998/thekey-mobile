import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import React from 'react'
import EducationListView from '../screens/ProfileScreen/components/EducationListView'

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
}
const CenteredView = ({ children }) => <View style={style}>{children}</View>

const education = [
  {
    schoolType: 'UNDERGRADUATE',
    schoolName: 'Harvard University',
    degreeType: 'Bachelors Degree',
    major: 'East Asian Studies',
    startYear: '2013',
    graduationYear: '2017',
    id: 0,
  },
  {
    schoolType: 'GRADUATE',
    schoolName: 'Beachwood High School',
    startYear: '2009',
    graduationYear: '2013',
    id: 1,
  },
]

storiesOf('CenteredView').add('EducationListView', () => (
  <CenteredView>
    <EducationListView educationData={education} />
  </CenteredView>
))
