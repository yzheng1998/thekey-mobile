import React, { Component } from 'react'
import { FlatList, ScrollView, View } from 'react-native'
import JobCard from '../../components/JobCard'
import { CardDivider } from './styles'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import LoadingWrapper from '../../components/LoadingWrapper'
import JobsHeaderImage from '../../../assets/JobsBackground.png'
import SimilarItemsHeader from '../../components/SimilarItemsHeader'

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
              <SimilarItemsHeader
                backgroundImage={JobsHeaderImage}
                title="Similar Jobs"
                navigation={this.props.navigation}
              />
              <FlatList
                keyExtractor={job => job.id}
                data={data.similarJobs}
                renderItem={({ item: job }) => (
                  <View>
                    <JobCard
                      navigate={id => this.props.navigation.push('Job', { id })}
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
    )
  }
}

export default SimilarJobsScreen
