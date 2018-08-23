import React, { Component } from 'react'
import { Button } from './styles'
import Star from 'react-native-vector-icons/FontAwesome'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { buttonRadius } from '../../constants'

const TOGGLE_JOB_INTEREST = gql`
  mutation toggleInterestInJob($jobId: ID!) {
    toggleInterestInJob(jobId: $jobId) {
      id
      interestedJob {
        id
        title
        description
        picture
        location
        commitment
        deadline
        tags {
          name
        }
        isInterested
      }
    }
  }
`
export default class JobStarButton extends Component {
  render() {
    const { isInterested, id } = this.props
    const color = isInterested
      ? this.props.startColor || 'white'
      : this.props.endColor || 'white'
    return (
      <Mutation mutation={TOGGLE_JOB_INTEREST} variables={{ jobId: id }}>
        {toggleInterestInJob => (
          <Button
            hitSlop={buttonRadius}
            onPress={() => {
              const variables = { jobId: id }
              toggleInterestInJob({ variables })
            }}
          >
            <Star
              name={isInterested ? 'star' : 'star-o'}
              size={this.props.size || 27}
              color={color}
            />
          </Button>
        )}
      </Mutation>
    )
  }
}
