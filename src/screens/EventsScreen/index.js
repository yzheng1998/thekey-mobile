import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { FlatList, Text, View } from 'react-native'
import SearchBar from '../../components/SearchBar'
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

const GET_EVENTS = gql`
  query events($eventsFilterInput: EventsFilterInput!) {
    events(eventsFilterInput: $eventsFilterInput) {
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
    }
  }
`
class EventsScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  state = {
    tab: 0,
    searchText: '',
  }

  updateState = value => {
    this.setState({ tab: value })
  }

  updateText = searchText => {
    this.setState({ searchText })
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

    const { searchText } = this.state

    const variables = {
      eventsFilterInput: {
        startsAt: customVariable(this.state.tab),
        location: this.state.searchText,
        tag: this.state.searchText,
        title: this.state.searchText,
      },
    }

    return (
      <View>
        <EventsHeader
          navigation={this.props.navigation}
          selectedIndex={this.state.tab}
          updateState={this.updateState}
        />
        <SearchBar
          updateText={this.updateText}
          searchText={searchText}
          placeholderText="Search Events"
        />
        <Background>
          <Query query={GET_EVENTS} variables={variables}>
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
          <Query query={GET_EVENTS} variables={{ eventsFilterInput: {} }}>
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
                        navigate={id =>
                          this.props.navigation.navigate('Event', { id })
                        }
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
