import EventScreen from '../screens/EventScreen'
import React from 'react'
import { storiesOf } from '@storybook/react-native'

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
  image:
    'https://www.telegraph.co.uk/content/dam/Travel/galleries/travel/picturegalleries/The-worlds-best-city-skylines/skyline-new-york_3461538a.jpg',
  title: 'A super fun eventA super fun event',
  timeStamp: '2018-06-18 12:52:03.744-04',
  interestedFriends: friends,
}

storiesOf('CenteredView').add('Event Screen', () => (
  <EventScreen
    picture={{
      uri:
        'https://cdn.zeplin.io/5b18b9740bc6b2af45546408/assets/471BEE5E-80BF-441B-BA1A-1CFDE6D5A340.png',
    }}
    title="Virtual Reality Workshop"
    location="UC Campus"
    date="TUES, 29 MAY @ 9:00 AM"
    friends={friends}
    connectionsNum={5}
    events={[event, event, event]}
    about="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  />
))
