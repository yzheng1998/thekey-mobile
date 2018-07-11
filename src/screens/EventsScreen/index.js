import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { FlatList, Text, View } from 'react-native'
import { SearchBar } from 'react-native-elements'
import HorizontalEventsScroll from './components/HorizontalEventsScroll'
import SmallEventCard from './components/SmallEventCard'
import EventsHeader from './components/EventsHeader'
import {
  Background,
  Subtitle,
  Description,
  SmallCardContainer,
  Spacer,
} from './styles'
// need to write another query for similar events later
const GET_EVENTS = gql`
  query events($startsAt: String, $location: String) {
    events(eventsFilterInput: { startsAt: $startsAt, location: $location }) {
      id
      location
      dateRange
      title
      picture
      details
      link
      price
    }
  }
`
class EventsScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  state = {
    tab: 0,
  }

  updateState = value => {
    this.setState({ tab: value })
  }

  render() {
    const tabs = {
      ALL: 0,
      TODAY: 1,
      TOMORROW: 2,
      THIS_WEEK: 3,
    }

    const customVariable = tab => {
      switch (tab) {
        case tabs.ALL:
          return ''
        case tabs.TODAY:
          return 'today'
        case tabs.TOMORROW:
          return 'tomorrow'
        case tabs.THIS_WEEK:
          return 'thisWeek'
        default:
          return ''
      }
    }

    return (
      <View>
        <EventsHeader
          navigation={this.props.navigation}
          state={this.state.tab}
          updateState={this.updateState}
        />
        <SearchBar
          lightTheme
          platform="ios"
          cancelButtonTitle="Cancel"
          placeholder="Search Events"
        />
        <Background>
          <Query
            query={GET_EVENTS}
            variables={{ startsAt: customVariable(this.state.tab) }}
          >
            {({ loading, error, data }) => {
              if (loading) return <Text>Loading...</Text>
              if (error) return <Text>Error! ${error.message}</Text>
              return (
                <HorizontalEventsScroll
                  eventsList={data.events}
                  navigation={this.props.navigation}
                />
              )
            }}
          </Query>
          <Subtitle>More Events</Subtitle>
          <Description>Other events nearby</Description>
          <Query query={GET_EVENTS} variable={{}}>
            {({ loading, error, data }) => {
              if (loading) return <Text>Loading...</Text>
              if (error) return <Text>Error! ${error.message}</Text>
              return (
                <FlatList
                  keyExtractor={event => event.id}
                  data={data.events}
                  renderItem={({ item }) => (
                    <SmallCardContainer>
                      <SmallEventCard
                        navigation={this.props.navigation}
                        event={item}
                      />
                    </SmallCardContainer>
                  )}
                />
              )
            }}
          </Query>
          <Spacer />
        </Background>
      </View>
    )
  }
}

export default EventsScreen
