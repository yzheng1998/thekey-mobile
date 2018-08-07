import React, { Component } from 'react'
import {
  Container,
  Title,
  JobContainer,
  Header,
  SeeAll,
  ButtonContainer,
  List,
} from './styles'
import JobCard from '../../components/JobCard'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import LoadingWrapper from '../../components/LoadingWrapper'

const _ = require('lodash')

const SIMILAR_JOBS = gql`
  query similarJobs($id: ID!) {
    similarJobs(id: $id) {
      id
      title
      description
      picture
      experience
      location
      deadline
      commitment
      tags {
        name
      }
      isInterested
    }
  }
`

class SimilarJobsBlock extends Component {
  render() {
    return (
      <Query
        query={SIMILAR_JOBS}
        variables={{ id: this.props.navigation.getParam('id') }}
      >
        {({ loading, data }) => {
          if (loading) return <LoadingWrapper loading />
          if (_.isEmpty(data.similarJobs)) {
            return null
          }
          return (
            <Container>
              <Header>
                <Title>Similar Jobs</Title>
                <ButtonContainer
                  onPress={() =>
                    this.props.navigation.push('SimilarJobsScreen', {
                      data,
                    })
                  }
                >
                  <SeeAll>See All</SeeAll>
                </ButtonContainer>
              </Header>
              <List
                showsHorizontalScrollIndicator={false}
                horizontal
                keyExtractor={job => job.id}
                data={data.similarJobs}
                renderItem={({ item }) => (
                  <JobContainer
                    style={{ shadowOffset: { width: 5, height: 5 } }}
                  >
                    <JobCard
                      job={item}
                      navigate={id => this.props.navigation.push('Job', { id })}
                      isCard
                      activeOpacity={0.5}
                      borderRadius={20}
                      tagsOff
                    />
                  </JobContainer>
                )}
              />
            </Container>
          )
        }}
      </Query>
    )
  }
}

export default SimilarJobsBlock
