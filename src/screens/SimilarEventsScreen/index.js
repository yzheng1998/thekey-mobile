import React, { Component } from 'react'
import { FlatList } from 'react-native'
import EventCard from '../EventsScreen/components/SmallEventCard'
import {
  Background,
  HeaderBackground,
  Title,
  BackButtonContainer,
  EventsContainer,
  EventContainer,
} from './styles'
import BackButton from 'react-native-vector-icons/Ionicons'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import LoadingWrapper from '../../components/LoadingWrapper'

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
        <HeaderBackground>
          <BackButtonContainer onPress={() => this.props.navigation.goBack()}>
            <BackButton name="ios-arrow-back" size={33} color="white" />
          </BackButtonContainer>
          <Title>Similar Events</Title>
        </HeaderBackground>
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
                      <EventCard event={event} />
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
