import React, { Component } from 'react'
import { Button } from './styles'
import { Text } from 'react-native'
import Star from 'react-native-vector-icons/FontAwesome'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const TOGGLE_JOB_INTEREST = gql`
  mutation toggleInterestInJob($jobId: ID!) {
    toggleInterestInJob(jobId: $jobId) {
      interestedJob {
        id
      }
    }
  }
`
export default class JobStarButton extends Component {
  render() {
    const { onPress, isInterested, id } = this.props
    const color = isInterested
      ? this.props.startColor || 'white'
      : this.props.endColor || 'white'
    return (
      <Mutation mutation={TOGGLE_JOB_INTEREST} variables={{ jobId: id }}>
        {(toggleInterestInJob, { error }) => {
          if (error) {
            return <Text>error</Text>
          }
          return (
            <Button
              onPress={() => {
                const variables = { jobId: id }
                onPress()
                toggleInterestInJob({ variables })
              }}
            >
              <Star
                name={isInterested ? 'star' : 'star-o'}
                size={this.props.size || 27}
                color={color}
              />
            </Button>
          )
        }}
      </Mutation>
    )
  }
}
