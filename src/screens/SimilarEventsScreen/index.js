import React, { Component } from 'react'
import { FlatList } from 'react-native'
import EventCard from '../EventsScreen/components/SmallEventCard'
import {
  Background,
  HeaderBackground,
  EventsContainer,
  EventContainer,
} from './styles'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import LoadingWrapper from '../../components/LoadingWrapper'
import SimilarItemsHeader from '../../components/SimilarItemsHeader'
import EventsHeaderBackground from '../../../assets/EventsBackground.png'

const GET_SIMILAR_EVENTS = gql`
  query similarEvents($id: ID!) {
    similarEvents(id: $id) {
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

class SimilarEventsScreen extends Component {
  render() {
    const { id } = this.props.navigation.state.params
    return (
      <Background>
        <SimilarItemsHeader
          backgroundImage={EventsHeaderBackground}
          title="Similar Events"
          navigation={this.props.navigation}
        />
        <HeaderBackground />
        <EventsContainer>
          <Query query={GET_SIMILAR_EVENTS} variables={{ id }}>
            {({ loading, data }) => {
              if (loading) return <LoadingWrapper loading />
              return (
                <FlatList
                  keyExtractor={event => event.id}
                  data={data.similarEvents}
                  renderItem={({ item: event }) => (
                    <EventContainer>
                      <EventCard
                        event={event}
                        navigate={thisId =>
                          this.props.navigation.push('Event', { id: thisId })
                        }
                      />
                    </EventContainer>
                  )}
                />
              )
            }}
          </Query>
        </EventsContainer>
      </Background>
    )
  }
}

export default SimilarEventsScreen
