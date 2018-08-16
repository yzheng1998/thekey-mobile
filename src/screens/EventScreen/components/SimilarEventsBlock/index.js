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
import { FlatList, View } from 'react-native'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import LoadingWrapper from '../../../../components/LoadingWrapper'

const GET_SIMILAR_EVENTS = gql`
  query similarEvents($id: ID!) {
    similarEvents(id: $id) {
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
      interestedFriends {
        id
        firstName
        lastName
        profilePicture
      }
    }
  }
`

class SimilarEventsBlock extends Component {
  render() {
    const { id } = this.props
    return (
      <Query query={GET_SIMILAR_EVENTS} variables={{ id }}>
        {({ loading, data }) => {
          if (loading) return <LoadingWrapper loading />
          return (
            <Container>
              <Header>
                <Title>Similar Events</Title>
                <ButtonContainer
                  onPress={() =>
                    this.props.navigation.push('SimilarEventsScreen', { id })
                  }
                >
                  <SeeAll>See All</SeeAll>
                </ButtonContainer>
              </Header>
              <FlatList
                ListHeaderComponent={<View style={{ width: 8 }} />}
                ListFooterComponent={<View style={{ width: 8 }} />}
                horizontal
                keyExtractor={eventarr => eventarr.id}
                data={data.similarEvents}
                renderItem={({ item }) => (
                  <EventContainer>
                    <SmallEventCard
                      isInterested={item.isInterested}
                      navigate={() =>
                        this.props.navigation.push('Event', { id: item.id })
                      }
                      event={item}
                      navigateToPeopleList={interestedFriends =>
                        this.props.navigation.navigate('PeopleList', {
                          people: interestedFriends,
                          title: 'Interested Friends',
                        })
                      }
                    />
                  </EventContainer>
                )}
              />
            </Container>
          )
        }}
      </Query>
    )
  }
}

export default SimilarEventsBlock
