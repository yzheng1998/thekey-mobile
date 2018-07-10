import React, { Component } from 'react'
import {
  Container,
  Title,
  JobContainer,
  Header,
  SeeAll,
  ButtonContainer,
} from './styles'
import JobCard from '../../components/JobCard'
import { FlatList, Text, View } from 'react-native'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const _ = require('lodash')

const SIMILAR_JOBS = gql`
  query similarJobs($id: ID!) {
    similarJobs(id: $id) {
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
    }
  }
`

class SimilarJobsBlock extends Component {
  render() {
    return (
      <Container>
        <Query
          query={SIMILAR_JOBS}
          variables={{ id: this.props.navigation.getParam('id') }}
        >
          {({ loading, error, data }) => {
            if (loading) return <Text>Loading...</Text>
            if (error) {
              return <Text>Error! {error.message}</Text>
            }

            if (_.isEmpty(data.similarJobs)) {
              return null
            }
            return (
              <View>
                <Header>
                  <Title>Similar Jobs</Title>
                  <ButtonContainer
                    onPress={() =>
                      this.props.navigation.navigate('SimilarJobsScreen', {
                        data,
                      })
                    }
                  >
                    <SeeAll>See All</SeeAll>
                  </ButtonContainer>
                </Header>
                <FlatList
                  horizontal
                  keyExtractor={job => job.id}
                  data={data.similarJobs}
                  renderItem={({ item }) => (
                    <JobContainer>
                      <JobCard
                        job={item}
                        width="300px"
                        height="102px"
                        activeOpacity={0.5}
                        borderRadius={20}
                        tagsOff
                      />
                    </JobContainer>
                  )}
                />
              </View>
            )
          }}
        </Query>
      </Container>
    )
  }
}

export default SimilarJobsBlock
