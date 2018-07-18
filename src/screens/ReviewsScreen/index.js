import React, { Component } from 'react'
import { FlatList, ScrollView, Text } from 'react-native'
import CompanyCard from '../../components/CompanyCard'
import SearchFilterTab from '../../components/SearchFilterTab'
import { HeaderBackground, Title, BackButtonContainer } from './styles'
import BackButton from 'react-native-vector-icons/Ionicons'
import SearchBar from '../../components/SearchBar'
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
        highestRated: false,
      },
    }
    return (
      <ScrollView>
        <HeaderBackground>
          <BackButtonContainer onPress={() => this.props.navigation.goBack()}>
            <BackButton name="ios-arrow-back" size={27} color="white" />
          </BackButtonContainer>
          <Title>Reviews</Title>
          <SearchFilterTab
            options={['All', 'Saved', 'Highest Rated']}
            selectedColor="white"
            color="white"
            updateState={this.changeTab}
          />
        </HeaderBackground>
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
                keyExtractor={review => review.id}
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
