import React, { Component } from 'react'
import { FlatList, ScrollView, Text } from 'react-native'
import CompanyCard from '../../components/CompanyCard'
import SearchBar from '../../components/SearchBar'
import ReviewsHeader from './components/ReviewsHeader'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const GET_COMPANIES = gql`
  query companies($companyFilterInput: CompanyFilterInput!) {
    companies(companyFilterInput: $companyFilterInput) {
      id
      name
      email
      about
      rating
    }
  }
`
class ReviewsScreen extends Component {
  state = {
    searchText: '',
    tab: 0,
  }

  updateText = searchText => {
    this.setState({ searchText })
  }
  changeTab = value => {
    this.setState({ tab: value })
  }

  render() {
    const { searchText } = this.state
    const variables = {
      companyFilterInput: {
        name: this.state.searchText,
        highestRated: this.state.tab === 1,
      },
    }
    return (
      <ScrollView>
        <ReviewsHeader
          navigation={this.props.navigation}
          selectedIndex={this.state.tab}
          changeTab={this.changeTab}
        />
        <SearchBar
          updateText={this.updateText}
          searchText={searchText}
          placeholderText="Search All Reviews"
        />
        <Query query={GET_COMPANIES} variables={variables}>
          {({ loading, error, data }) => {
            if (loading) return <Text>Loading...</Text>
            if (error) return <Text>Error! ${error.message}</Text>
            return (
              <FlatList
                keyExtractor={company => company.id}
                data={data.companies}
                renderItem={({ item }) => (
                  <CompanyCard
                    title={item.name}
                    rating={item.rating}
                    companyId={item.id}
                    navigation={this.props.navigation}
                  />
                )}
              />
            )
          }}
        </Query>
      </ScrollView>
    )
  }
}

export default ReviewsScreen
