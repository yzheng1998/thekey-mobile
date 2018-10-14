import React, { Component } from 'react'
import { View, FlatList, ScrollView, StatusBar } from 'react-native'
import SearchBar from '../../components/SearchBar'
import JobCard from '../../components/JobCard'
import JobsHeader from './components/JobsHeader'
import { CardDivider } from './styles'
import { Query } from 'react-apollo'
import LoadingWrapper from '../../components/LoadingWrapper'
import { jobsLimit } from '../../../config'
import { GET_JOBS } from './queries'

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
      offset: 0,
      limit: jobsLimit,
    }
    const filterByApplied = this.state.tab === 1
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <StatusBar barStyle="light-content" />
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
        <CardDivider />
        <ScrollView keyboardShouldPersistTaps="handled">
          <Query query={GET_JOBS} variables={variables}>
            {({ loading, data, refetch, fetchMore }) => {
              if (loading) return <LoadingWrapper loading />
              if (this.state.tab > 0) refetch()
              const usableData = filterByApplied
                ? data.jobs.nodes.filter(j => j.hasApplied === true)
                : data.jobs.nodes
              return (
                <FlatList
                  keyboardShouldPersistTaps="handled"
                  keyExtractor={job => job.id}
                  data={usableData}
                  onEndReachedThreshold={0.25}
                  onEndReached={() =>
                    fetchMore({
                      variables: {
                        ...variables,
                        offset: data.jobs.nodes.length,
                      },
                      updateQuery: (prev, { fetchMoreResult }) => {
                        if (!fetchMoreResult) return prev
                        const newNodes = [
                          ...prev.jobs.nodes,
                          ...fetchMoreResult.jobs.nodes.filter(
                            n => !prev.jobs.nodes.some(p => p.id === n.id),
                          ),
                        ]
                        const newQuery = {
                          ...prev,
                          jobs: {
                            ...prev.jobs,
                            nodes: newNodes,
                            pageInfo: fetchMoreResult.jobs.pageInfo,
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
