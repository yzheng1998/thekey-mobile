import React, { Component } from 'react'
import { FlatList, View } from 'react-native'
import EventCard from '../EventsScreen/components/SmallEventCard'
import {
  HeaderBackground,
  Title,
  BackButtonContainer,
  EventsContainer,
  EventContainer,
} from './styles'
import BackButton from 'react-native-vector-icons/Ionicons'

class SimilarEventsScreen extends Component {
  render() {
    const { events } = this.props
    return (
      <View>
        <HeaderBackground>
          <BackButtonContainer onPress={() => this.props.navigation.goBack()}>
            <BackButton name="ios-arrow-back" size={33} color="white" />
          </BackButtonContainer>
          <Title>People Also Viewed</Title>
        </HeaderBackground>
        <EventsContainer>
          <FlatList
            keyExtractor={event => event.id}
            data={events}
            renderItem={({ item: event }) => (
              <EventContainer>
                <EventCard event={event} />
              </EventContainer>
            )}
          />
          )
        </EventsContainer>
      </View>
    )
  }
}

export default SimilarEventsScreen
