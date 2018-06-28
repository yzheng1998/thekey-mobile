import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import React from 'react'
import ExperienceListView from '../screens/ProfileScreen/components/ExperienceListView'

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
}
const CenteredView = ({ children }) => <View style={style}>{children}</View>
const experience = [
  {
    companyName: 'Unfiltered Network',
    position: 'CEO',
    startYear: '2016',
    endYear: 'Present / 1yr 9 mos',
    id: 0,
  },
  {
    companyName: 'Facemovie',
    position: 'Graphic Designer',
    startYear: '2010',
    endYear: '2016',
    id: 1,
  },
]

storiesOf('CenteredView').add('ExperienceListView', () => (
  <CenteredView>
    <ExperienceListView experienceData={experience} />
  </CenteredView>
))
