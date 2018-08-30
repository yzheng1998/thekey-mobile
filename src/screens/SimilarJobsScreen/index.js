import React, { Component } from 'react'
import { FlatList, ScrollView, View } from 'react-native'
import JobCard from '../../components/JobCard'
import { CardDivider } from './styles'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import LoadingWrapper from '../../components/LoadingWrapper'
import JobsHeaderImage from '../../../assets/JobsBackground.png'
import MainHeader from '../../components/MainHeader'

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
class SimilarJobsScreen extends Component {
  render() {
    return (
      <View>
        <MainHeader
          backgroundImage={JobsHeaderImage}
          title="Similar Jobs"
          navigation={this.props.navigation}
        />
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
              <ScrollView>
                <FlatList
                  keyExtractor={job => job.id}
                  data={data.similarJobs}
                  contentContainerStyle={{ paddingBottom: 115 }}
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
