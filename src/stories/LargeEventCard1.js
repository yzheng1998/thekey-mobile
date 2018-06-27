import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import LargeEventCard from '../screens/EventsScreen/components/LargeEventCard'
import React from 'react'

const placeholder = require('../../assets/city.png')

const CenteredView = ({ children }) => <View>{children}</View>
const friends = [
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
  {
    firstName: 'Ivraj',
    id: 4,
    profilePicture: {
      uri: 'https://www.dev.hsa.net/img/team/Ivraj.jpg',
    },
  },
  {
    firstName: 'Jovi',
    id: 5,
    profilePicture: {
      uri: 'https://www.dev.hsa.net/img/team/Jovin.jpg',
    },
  },
]
storiesOf('CenteredView').add('Large Event Card 1', () => (
  <CenteredView>
    <LargeEventCard
      image={placeholder}
      price={40.0}
      title="A super fun eventA super fun event"
      location="DEV"
      timeStamp="2018-06-18 12:52:03.744-04"
      mutualFriends={friends}
    />
  </CenteredView>
))
