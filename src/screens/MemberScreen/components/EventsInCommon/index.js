import React, { Component } from 'react'
import { FlatList } from 'react-native'
import SmallEventCard from '../../../EventsScreen/components/SmallEventCard'
import { SmallCardContainer } from './styles'
import uuidv4 from 'uuid/v4'

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

const exampleEvent = {
  image: 'https://c1.staticflickr.com/1/126/387606063_408c203f6c_b.jpg',
  title: 'A super fun eventA super fun event',
  dateRange: ['2018-06-18 12:52:03.744-04', '2018-06-18 12:52:03.744-04'],
  interestedFriends: friends,
}

const events = [exampleEvent, exampleEvent, exampleEvent]

const eventsWithIds = events.map(event => ({
  ...event,
  id: uuidv4(),
}))

class EventsInCommon extends Component {
  render() {
    return (
      <FlatList
        horizontal
        keyExtractor={item => item.id}
        data={eventsWithIds}
        renderItem={({ item }) => (
          <SmallCardContainer>
            <SmallEventCard
              width="327px"
              navigation={this.props.navigation}
              event={item}
            />
          </SmallCardContainer>
        )}
      />
    )
  }
}

export default EventsInCommon
