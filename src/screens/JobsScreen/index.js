import React, { Component } from 'react'
import gql from 'graphql-tag'
import { View, FlatList, ScrollView, Text } from 'react-native'
import SearchBar from '../../components/SearchBar'
import JobCard from '../../components/JobCard'
import SearchFilterTab from '../../components/SearchFilterTab'
import {
  HeaderBackground,
  Title,
  BackButton,
  Divider,
  CardDivider,
} from './styles'
import { Query } from 'react-apollo'
import BackArrow from 'react-native-vector-icons/Ionicons'

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
    }
  }
`

class JobsScreen extends Component {
  state = {
    searchText: '',
  }

  updateText = searchText => {
    this.setState({ searchText })
  }

  render() {
    const { searchText } = this.state
    const variables = {
      jobsFilterInput: {
        tag: searchText,
      },
    }
    return (
      <ScrollView keyboardShouldPersistTaps="always">
        <HeaderBackground>
          <BackButton onPress={() => this.props.navigation.goBack()}>
            <BackArrow name="ios-arrow-back" color="white" size={30} />
          </BackButton>
          <Title>Jobs/Internships</Title>
          <SearchFilterTab options={['All', 'Saved', 'Applied For']} />
        </HeaderBackground>
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
                    <JobCard navigation={this.props.navigation} job={job} />
                    <CardDivider />
                  </View>
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
