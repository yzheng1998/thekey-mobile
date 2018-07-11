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
    // hardcoding array of friends for now
    const friends = [
      {
        firstName: 'Yuke',
        id: 1,
        profilePicture: {
          uri:
            'https://scontent.fzty2-1.fna.fbcdn.net/v/t31.0-8/19095354_1322253334562342_5268478069300274794_o.jpg?_nc_cat=0&oh=5998f02ad58ac913850952492aaa62ba&oe=5BBDE33A',
        },
      },
      {
        firstName: 'Noah',
        id: 2,
        profilePicture: {
          uri: 'https://www.dev.hsa.net/img/team/Noah.jpg',
        },
      },
      {
        firstName: 'Humprey',
        id: 3,
        profilePicture: {
          uri: 'https://www.dev.hsa.net/img/team/humphrey.JPG',
        },
      },
      {
        firstName: 'Ivraj',
        id: 4,
        profilePicture: {
          uri: 'https://www.dev.hsa.net/img/team/Ivraj.jpg',
        },
      },
      {
        firstName: 'Jovi',
        id: 5,
        profilePicture: {
          uri: 'https://www.dev.hsa.net/img/team/Jovin.jpg',
        },
      },
    ]
    const { searchText } = this.state
    return (
      <View>
        <EventsHeader
          navigation={this.props.navigation}
          state={this.state.tab}
          updateState={this.updateState}
        />
        <SearchBar
          updateText={this.updateText}
          searchText={searchText}
          placeholderText="Search Events"
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
                        image="https://c1.staticflickr.com/2/1679/25672866665_4ccec2fd37_b.jpg"
                        title={item.title}
                        timeStamp={new Date(item.dateRange[0]).toISOString()}
                        interestedFriends={friends}
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
