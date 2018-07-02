import { storiesOf } from '@storybook/react-native'
import React from 'react'
import SimilarJobsScreen from '../screens/SimilarJobsScreen'
import Beats from './beats3.jpg'

const tagData = [
  {
    name: 'Headphones',
    image: {
      uri:
        'https://scontent.fzty2-1.fna.fbcdn.net/v/t31.0-8/19095354_1322253334562342_5268478069300274794_o.jpg?_nc_cat=0&oh=5998f02ad58ac913850952492aaa62ba&oe=5BBDE33A',
    },
  },
  {
    name: 'Tech',
    image: {
      uri:
        'https://scontent.fzty2-1.fna.fbcdn.net/v/t31.0-8/19095354_1322253334562342_5268478069300274794_o.jpg?_nc_cat=0&oh=5998f02ad58ac913850952492aaa62ba&oe=5BBDE33A',
    },
  },
  {
    name: 'Leadership',
    image: {
      uri:
        'https://scontent.fzty2-1.fna.fbcdn.net/v/t31.0-8/19095354_1322253334562342_5268478069300274794_o.jpg?_nc_cat=0&oh=5998f02ad58ac913850952492aaa62ba&oe=5BBDE33A',
    },
  },
]

const job = {
  id: 0,
  picture: Beats,
  title: 'General Manager',
  company: '@ Beats By Dre',
  commitment: 'Full time',
  location: 'SF Bay Area',
  tags: tagData,
  deadline: '07/31/2018',
}
const job2 = {
  id: 1,
  picture: '',
  title: 'General Manager',
  company: '@ Beats By Dre',
  commitment: 'Full time',
  location: 'SF Bay Area',
  tags: tagData,
  deadline: '07/31/2018',
}
const job3 = {
  id: 2,
  picture: Beats,
  title: 'General Manager',
  company: '@ Beats By Dre',
  commitment: 'Full time',
  location: 'SF Bay Area',
  tags: tagData,
  deadline: '07/31/2018',
}

storiesOf('CenteredView').add('Similar Jobs Screen', () => (
  <SimilarJobsScreen jobs={[job, job2, job3]} />
))
