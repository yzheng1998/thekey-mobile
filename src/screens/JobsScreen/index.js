import React, { Component } from 'react'
import gql from 'graphql-tag'
import { FlatList, ScrollView, Text } from 'react-native'
import { SearchBar } from 'react-native-elements'
import JobCard from '../../components/JobCard'
import SearchFilterTab from '../../components/SearchFilterTab'
import { HeaderBackground, Title } from './styles'
import { Query } from 'react-apollo'

const GET_JOBS = gql`
  query jobs {
    jobs {
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
    }
  }
`

class JobsScreen extends Component {
  render() {
    return (
      <ScrollView>
        <HeaderBackground>
          <Title>Jobs/Internships</Title>
          <SearchFilterTab options={['All', 'Saved', 'Applied For']} />
        </HeaderBackground>
        <SearchBar lightTheme placeholder="Search Jobs & Internships" />
        <Query query={GET_JOBS}>
          {({ loading, error, data }) => {
            if (loading) return <Text>Loading...</Text>
            if (error) {
              return <Text>Error! {error.message}</Text>
            }
            return (
              <FlatList
                keyExtractor={job => job.id}
                data={data.jobs}
                renderItem={({ item: job }) => (
                  <JobCard navigation={this.props.navigation} job={job} />
                )}
              />
            )
          }}
        </Query>
      </ScrollView>
    )
  }
}

export default JobsScreen
