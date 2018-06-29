import React, { Component } from 'react'
import { Container, Title, EventContainer, Header, SeeAll } from './styles'
import EventCard from '../../screens/EventsScreen/components/SmallEventCard'
import { FlatList } from 'react-native'

class SimilarEventsBlock extends Component {
  render() {
    const { events } = this.props
    return (
      <Container>
        <Header>
          <Title>Similar Events</Title>
          <SeeAll>See All</SeeAll>
        </Header>
        <FlatList
          horizontal
          keyExtractor={eventarr => eventarr.id}
          data={events}
          renderItem={({ item }) => (
            <EventContainer>
              <EventCard width="327px" event={item} />
            </EventContainer>
          )}
        />
      </Container>
    )
  }
}

export default SimilarEventsBlock