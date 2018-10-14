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
import { Query } from 'react-apollo'
import LoadingWrapper from '../../../../components/LoadingWrapper'
import { buttonRadius } from '../../../../constants'
import { GET_SIMILAR_EVENTS } from './queries'
import { similarEventsLimit } from '../../../../../config'

class SimilarEventsBlock extends Component {
  render() {
    const { id } = this.props
    const variables = {
      id,
      offset: 0,
      limit: similarEventsLimit,
    }
    return (
      <Query query={GET_SIMILAR_EVENTS} variables={variables}>
        {({ loading, data, fetchMore }) => {
          if (loading) return <LoadingWrapper loading />
          return (
            <Container>
              <Header>
                <Title>Similar Events</Title>
                <ButtonContainer
                  hitSlop={buttonRadius}
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
                data={data.similarEvents.nodes}
                onEndReachedThreshold={0.25}
                onEndReached={() =>
                  fetchMore({
                    variables: {
                      ...variables,
                      offset: data.similarEvents.nodes.length,
                    },
                    updateQuery: (prev, { fetchMoreResult }) => {
                      if (!fetchMoreResult) return prev

                      const newNodes = [
                        ...prev.similarEvents.nodes,
                        ...fetchMoreResult.similarEvents.nodes.filter(
                          n =>
                            !prev.similarEvents.nodes.some(p => p.id === n.id),
                        ),
                      ]

                      const newQuery = {
                        ...prev,
                        similarEvents: {
                          ...prev.similarEvents,
                          nodes: newNodes,
                          pageInfo: fetchMoreResult.similarEvents.pageInfo,
                        },
                      }

                      return newQuery
                    },
                  })
                }
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
