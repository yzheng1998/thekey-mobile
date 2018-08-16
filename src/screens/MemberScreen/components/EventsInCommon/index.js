import React, { Component } from 'react'
import { FlatList } from 'react-native'
import SmallEventCard from '../../../EventsScreen/components/SmallEventCard'
import { SmallCardContainer } from './styles'

class EventsInCommon extends Component {
  render() {
    return (
      <FlatList
        horizontal
        keyExtractor={item => item.id}
        data={this.props.events}
        renderItem={({ item }) => (
          <SmallCardContainer>
            <SmallEventCard
              navigation={this.props.navigation}
              navigate={() =>
                this.props.navigation.push('Event', { id: item.id })
              }
              event={item}
            />
          </SmallCardContainer>
        )}
      />
    )
  }
}

export default EventsInCommon
