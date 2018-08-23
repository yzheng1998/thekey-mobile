import React, { Component } from 'react'
import { Button } from './styles'
import Star from 'react-native-vector-icons/FontAwesome'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { buttonRadius } from '../../constants'

const TOGGLE_EVENT_INTEREST = gql`
  mutation toggleInterestInEvent($eventId: ID!) {
    toggleInterestInEvent(eventId: $eventId) {
      id
      interestedEvent {
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
  }
`
export default class EventStarButton extends Component {
  render() {
    const { isInterested, id } = this.props
    const color = isInterested
      ? this.props.startColor || 'white'
      : this.props.endColor || 'white'
    return (
      <Mutation mutation={TOGGLE_EVENT_INTEREST} key={id}>
        {toggleInterestInEvent => (
          <Button
            hitSlop={buttonRadius}
            onPress={() => {
              const variables = { eventId: id }
              toggleInterestInEvent({ variables })
            }}
          >
            <Star
              name={isInterested ? 'star' : 'star-o'}
              size={27}
              color={color}
            />
          </Button>
        )}
      </Mutation>
    )
  }
}
