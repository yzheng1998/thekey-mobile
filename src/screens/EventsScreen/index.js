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
      startsAt
      endsAt
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

    const customVariable = () => {
      switch (this.state.tab) {
        case tabs.ALL:
          return ''
        case tabs.TODAY:
          return ''
        case tabs.TOMORROW:
          return ''
        case tabs.THIS_WEEK:
          return ''
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
          <Query query={GET_EVENTS} variable={{}}>
            {({ loading, error, data }) => {
              if (loading) return <Text>Loading...</Text>
              if (error) return <Text>Error! ${error.message}</Text>
              console.log('state', this.state.tab)
              console.log('customVariable', customVariable)
              return <HorizontalEventsScroll eventsList={data.events} />
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
                        image="https://c1.staticflickr.com/2/1679/25672866665_4ccec2fd37_b.jpg"
                        title={item.title}
                        timeStamp={item.startsAt}
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
