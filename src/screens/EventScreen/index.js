import React, { Component } from 'react'
import { Container, TagsContainer } from './styles'
import EventPictureBlock from './components/EventPictureBlock'
import AboutBlock from '../../components/AboutBlock'
import TagLine from '../../components/TagLine'
import SimilarEventsBlock from './components/SimilarEventsBlock'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Text } from 'react-native'
import moment from 'moment'

const GET_EVENT = gql`
  query event($id: ID!) {
    event(id: $id) {
      id
      picture
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
      isInterested
      interestedFriends {
        id
        firstName
        lastName
        profilePicture
      }
    }
  }
`

function formatTimeStamp(timeStamp) {
  const momentTimeStamp = moment(timeStamp, 'YYYY-MM-DD HH:mm:ss')
  const dayOfWeek = momentTimeStamp.format('ddd').toUpperCase()
  const month = momentTimeStamp.format('MMM').toUpperCase()
  const time = momentTimeStamp.format('h:mm A')
  const day = momentTimeStamp.format('D')
  return `${dayOfWeek}, ${day} ${month} @ ${time}`
}

const defaultEventImage =
  'https://images.unsplash.com/photo-1470753937643-efeb931202a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=605dda29d7945345968d2dfb3eeb672e&auto=format&fit=crop&w=1500&q=80'

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
            id,
            location,
            dateRange,
            title,
            picture,
            details,
            tags,
            isInterested,
            interestedFriends,
          } = data.event
          const usableTimeStamp = new Date(dateRange[0])
          const displayImage = picture || defaultEventImage
          return (
            <Container>
              <EventPictureBlock
                id={id}
                navigation={this.props.navigation}
                picture={displayImage}
                title={title}
                location={location}
                date={formatTimeStamp(usableTimeStamp)}
                friends={interestedFriends}
                connectionsNum={interestedFriends.length}
                isInterested={isInterested}
              />
              <AboutBlock about={details} />
              <TagsContainer>
                <TagLine tagData={tags} lines={1} />
              </TagsContainer>
              <SimilarEventsBlock navigation={this.props.navigation} id={id} />
            </Container>
          )
        }}
      </Query>
    )
  }
}

export default EventScreen
