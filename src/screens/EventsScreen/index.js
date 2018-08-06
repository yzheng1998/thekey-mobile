import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { FlatList, Text, View, StatusBar } from 'react-native'
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
import { GET_EVENTS, GET_SUGGESTED_EVENTS } from './query'

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

    const getTabName = tab => {
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

    const currentTab = getTabName(this.state.tab)

    const query = searchText || currentTab ? GET_EVENTS : GET_SUGGESTED_EVENTS

    const variables = {
      eventsFilterInput: {
        startsAt: currentTab,
        location: this.state.searchText,
        tag: this.state.searchText,
        title: this.state.searchText,
      },
    }
    return (
      <View>
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
            {({ loading, error, data }) => {
              if (loading) return <Text>Loading...</Text>
              if (error) return <Text>Error! ${error.message}</Text>

              const usableData =
                searchText || currentTab ? data.events : data.suggestedEvents

              return (
                <HorizontalEventsScroll
                  eventsList={usableData}
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
                  keyboardShouldPersistTaps="handled"
                  keyExtractor={event => event.id}
                  data={data.events}
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
