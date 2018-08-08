import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import LargeEventCard from '../LargeEventCard'
import { Container, CardList, CardContainer } from './styles'

export default class HorizontalEventsScroll extends Component {
  static defaultProps = {
    eventsList: [{}],
  }

  static propTypes = {
    eventsList: PropTypes.arrayOf(PropTypes.object),
  }
  render() {
    const { eventsList } = this.props

    return (
      <Container>
        <CardList
          keyboardShouldPersistTaps="handled"
          horizontal
          keyExtractor={event => event.id}
          data={eventsList}
          ListFooterComponent={<View style={{ width: 20 }} />}
          renderItem={({ item }) => (
            <CardContainer>
              <LargeEventCard navigation={this.props.navigation} event={item} />
            </CardContainer>
          )}
        />
      </Container>
    )
  }
}
