import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import React from 'react'
import SimilarJobs from '../components/SimilarJobsBlock'

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
}
const CenteredView = ({ children }) => <View style={style}>{children}</View>
const job = {
  picture: {
    uri:
      'https://cdn.zeplin.io/5b18b9740bc6b2af45546408/assets/6FE3D570-0BE7-40CA-923D-A045ECA2830D.png',
  },

  title: 'General Manager',
  tags: [],
  company: '@ Beats By Dre',
  commitment: 'Full time',
  location: 'SF Bay Area',
  deadline: '06/31/2018',
}

storiesOf('CenteredView').add('Similar Jobs', () => (
  <CenteredView>
    <SimilarJobs jobs={[job, job, job]} />
  </CenteredView>
))
