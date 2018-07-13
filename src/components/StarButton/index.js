import React, { Component } from 'react'
import { Text } from 'react-native'
import { Button } from './styles'
import Star from 'react-native-vector-icons/FontAwesome'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const TOGGLE_INTEREST = gql`
  mutation ShowInterestInEvent($eventId: ID!) {
    showInterestInEvent(eventId: $eventId) {
      interestedEvent {
        id
      }
    }
  }
`

export default class StarButton extends Component {
  render() {
    const { onPress, isInterested, id } = this.props
    return (
      <Mutation mutation={TOGGLE_INTEREST}>
        {(showInterestInEvent, { loading, error }) => {
          if (loading) return <Text>loading</Text>
          if (error) return <Text>error</Text>
          return (
            <Button
              onPress={() => {
                const variables = { eventId: id }
                onPress()
                showInterestInEvent({ variables })
              }}
            >
              <Star
                name={isInterested ? 'star' : 'star-o'}
                size={27}
                color="white"
              />
            </Button>
          )
        }}
      </Mutation>
    )
  }
}
