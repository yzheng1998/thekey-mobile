import React, { Component } from 'react'
import { FlatList, ScrollView, View } from 'react-native'
import JobCard from '../../components/JobCard'
import { CardDivider } from './styles'
import { Query } from 'react-apollo'
import LoadingWrapper from '../../components/LoadingWrapper'
import JobsHeaderImage from '../../../assets/JobsBackground.png'
import MainHeader from '../../components/MainHeader'
import { SIMILAR_JOBS } from './queries'
import { similarJobsLimit } from '../../../config'

const _ = require('lodash')

class SimilarJobsScreen extends Component {
  render() {
    const variables = {
      id: this.props.navigation.getParam('id'),
      offset: 0,
      limit: similarJobsLimit,
    }
    return (
      <View>
        <MainHeader
          backgroundImage={JobsHeaderImage}
          title="Similar Jobs"
          navigation={this.props.navigation}
        />
        <Query query={SIMILAR_JOBS} variables={variables}>
          {({ loading, data, fetchMore }) => {
            if (loading) return <LoadingWrapper loading />
            if (_.isEmpty(data.similarJobs.nodes)) {
              return null
            }
            return (
              <ScrollView>
                <FlatList
                  keyExtractor={job => job.id}
                  data={data.similarJobs.nodes}
                  contentContainerStyle={{ paddingBottom: 115 }}
                  onEndReachedThreshold={0.25}
                  onEndReached={() =>
                    fetchMore({
                      variables: {
                        ...variables,
                        offset: data.similarJobs.nodes.length,
                      },
                      updateQuery: (prev, { fetchMoreResult }) => {
                        if (!fetchMoreResult) return prev

                        const newNodes = [
                          ...prev.similarJobs.nodes,
                          ...fetchMoreResult.similarJobs.nodes.filter(
                            n =>
                              !prev.similarJobs.nodes.some(p => p.id === n.id),
                          ),
                        ]

                        const newQuery = {
                          ...prev,
                          similarJobs: {
                            ...prev.similarJobs,
                            nodes: newNodes,
                            pageInfo: fetchMoreResult.similarJobs.pageInfo,
                          },
                        }

                        return newQuery
                      },
                    })
                  }
                  renderItem={({ item: job }) => (
                    <View>
                      <JobCard
                        navigate={id =>
                          this.props.navigation.push('Job', { id })
                        }
                        job={job}
                      />
                      <CardDivider />
                    </View>
                  )}
                />
              </ScrollView>
            )
          }}
        </Query>
      </View>
    )
  }
}

export default SimilarJobsScreen
