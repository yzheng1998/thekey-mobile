import JobScreen from '../screens/JobScreen'
import React from 'react'
import { storiesOf } from '@storybook/react-native'

const job = {
  picture: {
    uri:
      'https://cdn.zeplin.io/5b18b9740bc6b2af45546408/assets/6FE3D570-0BE7-40CA-923D-A045ECA2830D.png',
  },
  title: 'General Manager',
  company: '@ Beats By Dre',
  commitment: 'Full time',
  location: 'SF Bay Area',
  deadline: '06/31/2018',
  tags: [],
}

const aboutJob = {
  about:
    'The Inbound General Manager manages and leads a team to ensure that customer services meet client needs as well as the standards of a national service delivery model.',
  picture: {
    uri:
      'https://cdn.zeplin.io/5b18b9740bc6b2af45546408/assets/6FE3D570-0BE7-40CA-923D-A045ECA2830D.png',
  },
  title: 'General Manager',
  company: '@Beats by Dre',
  commitment: 'Full time',
  location: 'SF Bay Area',
  views: '60',
  time: '06/20/2018',
  jobs: [job, job, job],
}

storiesOf('CenteredView').add('Job Screen', () => <JobScreen job={aboutJob} />)
