import React, { Component } from 'react'
import { Button } from './styles'
import { Text } from 'react-native'
import Star from 'react-native-vector-icons/FontAwesome'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const TOGGLE_EVENT_INTEREST = gql`
  mutation toggleInterestInEvent($eventId: ID!) {
    toggleInterestInEvent(eventId: $eventId) {
      interestedEvent {
        id
      }
    }
  }
`
export default class EventStarButton extends Component {
  render() {
    const { onPress, isInterested, id } = this.props
    const color = isInterested
      ? this.props.startColor || 'white'
      : this.props.endColor || 'white'
    return (
      <Mutation mutation={TOGGLE_EVENT_INTEREST} variables={{ eventId: id }}>
        {(toggleInterestInEvent, { error }) => {
          if (error) {
            return <Text>error</Text>
          }
          return (
            <Button
              onPress={() => {
                const variables = { eventId: id }
                onPress()
                toggleInterestInEvent({ variables })
              }}
            >
              <Star
                name={isInterested ? 'star' : 'star-o'}
                size={27}
                color={color}
              />
            </Button>
          )
        }}
      </Mutation>
    )
  }
}
