import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import React from 'react'
import SimilarEvents from '../components/SimilarEventsBlock'

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
}
const CenteredView = ({ children }) => <View style={style}>{children}</View>
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

const event = {
  image: 'https://c1.staticflickr.com/1/126/387606063_408c203f6c_b.jpg',
  title: 'A super fun eventA super fun event',
  timeStamp: '2018-06-18 12:52:03.744-04',
  interestedFriends: friends,
}

storiesOf('CenteredView').add('Similar Events', () => (
  <CenteredView>
    <SimilarEvents events={[event, event, event]} />
  </CenteredView>
))
