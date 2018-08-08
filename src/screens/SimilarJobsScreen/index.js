import React, { Component } from 'react'
import { FlatList, ScrollView, View } from 'react-native'
import JobCard from '../../components/JobCard'
import {
  HeaderBackground,
  Title,
  BackButtonContainer,
  CardDivider,
} from './styles'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import BackButton from 'react-native-vector-icons/Ionicons'
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
              <HeaderBackground>
                <BackButtonContainer
                  onPress={() => this.props.navigation.goBack()}
                >
                  <BackButton name="ios-arrow-back" size={33} color="white" />
                </BackButtonContainer>
                <Title>Similar Jobs</Title>
              </HeaderBackground>
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
