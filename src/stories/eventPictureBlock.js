import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { View } from 'react-native'
import EventPictureBlock from '../screens/EventScreen/components/EventPictureBlock'

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
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

storiesOf('CenteredView').add('EventPictureBlock', () => (
  <CenteredView>
    <EventPictureBlock
      picture={{
        uri:
          'https://cdn.zeplin.io/5b18b9740bc6b2af45546408/assets/471BEE5E-80BF-441B-BA1A-1CFDE6D5A340.png',
      }}
      title="Virtual Reality Workshop"
      location="UC Campus"
      date="TUES, 29 MAY @ 9:00 AM"
      mutualFriends={friends}
      connectionsNum={5}
    />
  </CenteredView>
))
