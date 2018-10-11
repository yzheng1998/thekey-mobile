import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { FlatList, View, StatusBar } from 'react-native'
import SearchBar from '../../components/SearchBar'
import HorizontalEventsScroll from './components/HorizontalEventsScroll'
import SmallEventCard from './components/SmallEventCard'
import EventsHeader from './components/EventsHeader'
import LoadingWrapper from '../../components/LoadingWrapper'
import {
  Background,
  Subtitle,
  Description,
  SmallCardContainer,
  Spacer,
} from './styles'
import { GET_EVENTS, GET_SUGGESTED_EVENTS } from './query'
import { eventsLimit } from '../../../config'

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
      THIS_WEEK: 2,
      THIS_MONTH: 3,
      INTERESTED_IN: 4,
    }

    const getTabName = tab => {
      switch (tab) {
        case tabs.ALL:
          return ''
        case tabs.TODAY:
          return 'today'
        case tabs.THIS_WEEK:
          return 'thisWeek'
        case tabs.THIS_MONTH:
          return 'thisMonth'
        case tabs.INTERESTED_IN:
          return ''
        default:
          return ''
      }
    }

    const { searchText } = this.state

    const currentTab = getTabName(this.state.tab)
    const filterByInterested = this.state.tab === 4 // same as saved events

    const query = searchText || currentTab ? GET_EVENTS : GET_SUGGESTED_EVENTS

    const variables = {
      eventsFilterInput: {
        startsAt: currentTab,
        location: this.state.searchText,
        tag: this.state.searchText,
        title: this.state.searchText,
      },
      limit: eventsLimit,
      offset: 0,
    }
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <StatusBar barStyle="light-content" />
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
        <Background keyboardShouldPersistTaps="handled">
          <Query query={query} variables={variables}>
            {({ loading, data }) => {
              if (loading) return <LoadingWrapper loading />
              const usableData =
                searchText || currentTab
                  ? data.events.nodes
                  : data.suggestedEvents.nodes
              const interestedEvents = filterByInterested
                ? data.suggestedEvents.nodes.filter(
                    e => e.isInterested === true,
                  )
                : searchText

              return (
                <LoadingWrapper loading={loading}>
                  <HorizontalEventsScroll
                    eventsList={
                      filterByInterested ? interestedEvents : usableData
                    }
                    navigation={this.props.navigation}
                  />
                </LoadingWrapper>
              )
            }}
          </Query>
          <Subtitle>More Events</Subtitle>
          <Description>Other events nearby</Description>
          <Query
            query={GET_EVENTS}
            variables={{
              eventsFilterInput: {},
              limit: eventsLimit,
              offset: 0,
            }}
          >
            {({ loading, data }) => {
              if (loading) return <LoadingWrapper loading />
              return (
                <LoadingWrapper loading={loading}>
                  <FlatList
                    ListFooterComponent={<View style={{ height: 20 }} />}
                    keyboardShouldPersistTaps="handled"
                    keyExtractor={event => event.id}
                    data={data.events.nodes}
                    renderItem={({ item }) => (
                      <SmallCardContainer>
                        <SmallEventCard
                          navigate={id =>
                            this.props.navigation.navigate('Event', { id })
                          }
                          event={item}
                          navigateToPeopleList={friends =>
                            this.props.navigation.navigate('PeopleList', {
                              people: friends,
                              title: 'Interested Friends',
                            })
                          }
                        />
                      </SmallCardContainer>
                    )}
                  />
                </LoadingWrapper>
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
