import React, { Component } from 'react'
import {
  Container,
  TagsContainer,
  BackButtonContainer,
  StarContainer,
} from './styles'
import EventPictureBlock from './components/EventPictureBlock'
import AboutBlock from '../../components/AboutBlock'
import TagLine from '../../components/TagLine'
import SimilarEventsBlock from './components/SimilarEventsBlock'
import BackButton from 'react-native-vector-icons/Ionicons'
import Star from 'react-native-vector-icons/Feather'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Text } from 'react-native'
import moment from 'moment'

const GET_EVENT = gql`
  query event($id: ID!) {
    event(id: $id) {
      id
      location
      dateRange
      title
      picture
      details
      link
      price
      tags {
        name
      }
    }
  }
`
const interestedFriends = [
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

function formatTimeStamp(timeStamp) {
  const momentTimeStamp = moment(timeStamp, 'YYYY-MM-DD HH:mm:ss')
  const dayOfWeek = momentTimeStamp.format('ddd').toUpperCase()
  const month = momentTimeStamp.format('MMM').toUpperCase()
  const time = momentTimeStamp.format('h:mm A')
  const day = momentTimeStamp.format('D')
  return `${dayOfWeek}, ${day} ${month} @ ${time}`
}
class EventScreen extends Component {
  render() {
    return (
      <Query
        query={GET_EVENT}
        variables={{ id: this.props.navigation.getParam('id') }}
      >
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading...</Text>
          if (error) return <Text>Error! ${error.message}</Text>

          const {
            location,
            dateRange,
            title,
            picture,
            details,
            tags,
          } = data.event
          const usableTimeStamp = new Date(dateRange[0])

          return (
            <Container>
              <EventPictureBlock
                navigation={this.props.navigation}
                picture={picture}
                title={title}
                location={location}
                date={formatTimeStamp(usableTimeStamp)}
                friends={interestedFriends}
                connectionsNum={interestedFriends.length}
              />
              <AboutBlock about={details} />
              <TagsContainer>
                <TagLine tagData={tags} lines={1} />
              </TagsContainer>
              <SimilarEventsBlock
                navigation={this.props.navigation}
                id={this.props.navigation.getParam('id')}
              />
              <BackButtonContainer
                onPress={() => this.props.navigation.goBack()}
              >
                <BackButton name="ios-arrow-back" size={27} color="white" />
              </BackButtonContainer>
              <StarContainer>
                <Star name="star" size={27} color="white" />
              </StarContainer>
            </Container>
          )
        }}
      </Query>
    )
  }
}

export default EventScreen
