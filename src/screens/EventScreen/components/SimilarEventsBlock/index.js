import React, { Component } from 'react'
import {
  Container,
  Title,
  EventContainer,
  Header,
  SeeAll,
  ButtonContainer,
} from './styles'
import SmallEventCard from '../../../../screens/EventsScreen/components/SmallEventCard'
import { FlatList } from 'react-native'

class SimilarEventsBlock extends Component {
  render() {
    const { events } = this.props
    console.log('Similar Events Block events', events)
    return (
      <Container>
        <Header>
          <Title>Similar Events</Title>
          <ButtonContainer
            onPress={() => this.props.navigation.push('SimilarEventsScreen')}
          >
            <SeeAll>See All</SeeAll>
          </ButtonContainer>
        </Header>
        <FlatList
          horizontal
          keyExtractor={eventarr => eventarr.id}
          data={events}
          renderItem={({ item }) => (
            <EventContainer>
              <SmallEventCard
                navigate={id => this.props.navigation.push('Event', { id })}
                width="350px"
                event={item}
              />
            </EventContainer>
          )}
        />
      </Container>
    )
  }
}

export default SimilarEventsBlock
