import React, { Component } from 'react'
import { FlatList, View } from 'react-native'
import EventCard from '../EventsScreen/components/SmallEventCard'
import { Background, EventContainer } from './styles'
import { Query } from 'react-apollo'
import LoadingWrapper from '../../components/LoadingWrapper'
import MainHeader from '../../components/MainHeader'
import EventsHeaderBackground from '../../../assets/EventsBackground.png'
import { GET_SIMILAR_EVENTS } from './queries'
import { similarEventsLimit } from '../../../config'

class SimilarEventsScreen extends Component {
  render() {
    const { id } = this.props.navigation.state.params
    const variables = {
      id,
      offset: 0,
      limit: similarEventsLimit,
    }
    return (
      <Background>
        <MainHeader
          backgroundImage={EventsHeaderBackground}
          title="Similar Events"
          navigation={this.props.navigation}
        />
        <Query query={GET_SIMILAR_EVENTS} variables={variables}>
          {({ loading, data, fetchMore }) => {
            if (loading) return <LoadingWrapper loading />
            return (
              <FlatList
                ListHeaderComponent={<View style={{ height: 12 }} />}
                ListFooterComponent={<View style={{ height: 24 }} />}
                keyExtractor={event => event.id}
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
                      return Object.assign({}, prev, {
                        similarEvents: Object.assign({}, prev.similarEvents, {
                          nodes: [
                            ...prev.similarEvents.nodes,
                            ...fetchMoreResult.similarEvents.nodes.filter(
                              n =>
                                !prev.similarEvents.nodes.some(
                                  p => p.id === n.id,
                                ),
                            ),
                          ],
                          pageInfo: fetchMoreResult.similarEvents.pageInfo,
                        }),
                      })
                    },
                  })
                }
                renderItem={({ item: event }) => (
                  <EventContainer>
                    <EventCard
                      event={event}
                      navigate={thisId =>
                        this.props.navigation.push('Event', { id: thisId })
                      }
                    />
                  </EventContainer>
                )}
              />
            )
          }}
        </Query>
      </Background>
    )
  }
}

export default SimilarEventsScreen
