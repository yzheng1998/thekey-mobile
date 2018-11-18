import React, { Component } from 'react'
import { View, FlatList, StatusBar } from 'react-native'
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
    tabChanged: false,
  }

  updateText = searchText => {
    this.setState({ searchText })
  }

  changeTab = tab => {
    this.setState({ tab, tabChanged: true })
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
        <Query query={GET_JOBS} variables={variables}>
          {({ loading, data, refetch }) => {
            if (loading) return <LoadingWrapper loading />
            if (this.state.tab > 0 && this.state.tabChanged) {
              refetch()
              this.setState({ tabChanged: false })
            }
            const usableData = filterByApplied
              ? data.jobs.nodes.filter(j => j.hasApplied === true)
              : data.jobs.nodes
            return (
              <FlatList
                keyboardShouldPersistTaps="handled"
                keyExtractor={job => job.id}
                data={usableData}
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
      </View>
    )
  }
}

export default JobsScreen
