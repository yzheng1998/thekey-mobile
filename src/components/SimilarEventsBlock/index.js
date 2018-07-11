import React, { Component } from 'react'
import {
  Container,
  Title,
  EventContainer,
  Header,
  SeeAll,
  ButtonContainer,
} from './styles'
import EventCard from '../../screens/EventsScreen/components/SmallEventCard'
import { FlatList } from 'react-native'

class SimilarEventsBlock extends Component {
  render() {
    const { events } = this.props
    return (
      <Container>
        <Header>
          <Title>Similar Events</Title>
          <ButtonContainer
            onPress={() =>
              this.props.navigation.navigate('SimilarEventsScreen')
            }
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
              <EventCard
                width="327px"
                image={item.image}
                title={item.title}
                timeStamp={item.timeStamp}
                interestedFriends={item.interestedFriends}
              />
            </EventContainer>
          )}
        />
      </Container>
    )
  }
}

export default SimilarEventsBlock
