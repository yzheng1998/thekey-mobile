import React, { Component } from 'react'
import gql from 'graphql-tag'
import { View, FlatList, ScrollView, Text } from 'react-native'
import SearchBar from '../../components/SearchBar'
import JobCard from '../../components/JobCard'
import JobsHeader from './components/JobsHeader'
import { Divider, CardDivider } from './styles'
import { Query } from 'react-apollo'

const GET_JOBS = gql`
  query jobs($jobsFilterInput: JobsFilterInput!) {
    jobs(jobsFilterInput: $jobsFilterInput) {
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
`

class JobsScreen extends Component {
  state = {
    searchText: '',
    tab: 0,
  }

  updateText = searchText => {
    this.setState({ searchText })
  }

  changeTab = tab => {
    this.setState({ tab })
  }

  render() {
    const { searchText } = this.state
    const variables = {
      jobsFilterInput: {
        tag: searchText,
      },
    }
    return (
      <View style={{ flex: 1 }}>
        <ScrollView keyboardShouldPersistTaps="always">
          <JobsHeader
            navigation={this.props.navigation}
            changeTab={this.changeTab}
            selectedIndex={this.state.tab}
          />
          <SearchBar
            updateText={this.updateText}
            searchText={searchText}
            placeholderText="Search Jobs & Internships"
          />
          <Divider />
          <Query query={GET_JOBS} variables={variables}>
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
                    <View>
                      <JobCard
                        navigate={id =>
                          this.props.navigation.navigate('Job', { id })
                        }
                        job={job}
                      />
                      <CardDivider />
                    </View>
                  )}
                />
              )
            }}
          </Query>
        </ScrollView>
      </View>
    )
  }
}

export default JobsScreen
