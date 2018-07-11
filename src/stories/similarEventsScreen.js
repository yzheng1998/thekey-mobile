import { storiesOf } from '@storybook/react-native'
import React from 'react'
import SimilarEventsScreen from '../screens/SimilarEventsScreen'

const friends2 = [
  {
    firstName: 'Yuke',
    id: 1,
    profilePicture: {
      uri:
        'https://scontent.fzty2-1.fna.fbcdn.net/v/t31.0-8/19095354_1322253334562342_5268478069300274794_o.jpg?_nc_cat=0&oh=5998f02ad58ac913850952492aaa62ba&oe=5BBDE33A',
    },
  },
  {
    firstName: 'Noah',
    id: 2,
    profilePicture: {
      uri: 'https://www.dev.hsa.net/img/team/Noah.jpg',
    },
  },
  {
    firstName: 'Humprey',
    id: 3,
    profilePicture: {
      uri: 'https://www.dev.hsa.net/img/team/humphrey.JPG',
    },
  },
]

const event = {
  image: 'https://c1.staticflickr.com/1/126/387606063_408c203f6c_b.jpg',
  title: 'A super fun eventA super fun event',
  timeStamp: '2018-06-18 12:52:03.744-04',
  interestedFriends: friends2,
}

storiesOf('CenteredView').add('Similar Events Screen', () => (
  <SimilarEventsScreen events={[event, event, event]} />
))
