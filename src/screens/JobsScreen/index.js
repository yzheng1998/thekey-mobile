import React, { Component } from 'react'
import gql from 'graphql-tag'
import { View, FlatList, ScrollView, StatusBar } from 'react-native'
import SearchBar from '../../components/SearchBar'
import JobCard from '../../components/JobCard'
import JobsHeader from './components/JobsHeader'
import { Divider, CardDivider } from './styles'
import { Query } from 'react-apollo'
import LoadingWrapper from '../../components/LoadingWrapper'

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
        savedOnly: this.state.tab === 2,
        appliedOnly: this.state.tab === 1,
        position: searchText,
        company: searchText,
        tag: searchText,
      },
    }
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <Query query={GET_JOBS} variables={variables}>
          {({ loading, data, refetch }) => {
            if (loading) return <LoadingWrapper loading />
            if (this.state.tab === 2) refetch()
            return (
              <ScrollView keyboardShouldPersistTaps="handled">
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
                <FlatList
                  keyboardShouldPersistTaps="handled"
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
              </ScrollView>
            )
          }}
        </Query>
      </View>
    )
  }
}

export default JobsScreen
