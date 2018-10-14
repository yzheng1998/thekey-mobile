import React, { Component } from 'react'
import { View } from 'react-native'
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
import { Query } from 'react-apollo'
import LoadingWrapper from '../../components/LoadingWrapper'
import { buttonRadius } from '../../constants'
import { SIMILAR_JOBS } from './queries'
import { similarJobsLimit } from '../../../config'

const _ = require('lodash')

class SimilarJobsBlock extends Component {
  render() {
    const variables = {
      id: this.props.navigation.getParam('id'),
      offset: 0,
      limit: similarJobsLimit,
    }
    return (
      <Query query={SIMILAR_JOBS} variables={variables}>
        {({ loading, data, fetchMore }) => {
          if (loading) return <LoadingWrapper loading />
          if (_.isEmpty(data.similarJobs.nodes)) {
            return null
          }
          return (
            <Container>
              <Header>
                <Title>Similar Jobs</Title>
                <ButtonContainer
                  hitSlop={buttonRadius}
                  onPress={() =>
                    this.props.navigation.push('SimilarJobsScreen', {
                      id: this.props.navigation.getParam('id'),
                    })
                  }
                >
                  <SeeAll>See All</SeeAll>
                </ButtonContainer>
              </Header>
              <List
                showsHorizontalScrollIndicator={false}
                ListFooterComponent={<View style={{ width: 16 }} />}
                horizontal
                keyExtractor={job => job.id}
                data={data.similarJobs.nodes}
                onEndReachedThreshold={0.25}
                onEndReached={() =>
                  fetchMore({
                    variables: {
                      ...variables,
                      offset: data.similarJobs.nodes.length,
                    },
                    updateQuery: (prev, { fetchMoreResult }) => {
                      if (!fetchMoreResult) return prev
                      return Object.assign({}, prev, {
                        similarJobs: Object.assign({}, prev.similarJobs, {
                          nodes: [
                            ...prev.similarJobs.nodes,
                            ...fetchMoreResult.similarJobs.nodes.filter(
                              n =>
                                !prev.similarJobs.nodes.some(
                                  p => p.id === n.id,
                                ),
                            ),
                          ],
                          pageInfo: fetchMoreResult.similarJobs.pageInfo,
                        }),
                      })
                    },
                  })
                }
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
