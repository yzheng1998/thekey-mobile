import React, { Component } from 'react'
import { AddReviewButton, Divider } from './styles'
import { FlatList, ScrollView, Text, View } from 'react-native'
import CompanyCard from '../../components/CompanyCard'
import CompanySearchModal from './components/CompanySearchModal'
import SearchBar from '../../components/SearchBar'
import ReviewsHeader from './components/ReviewsHeader'
import Icon from 'react-native-vector-icons/Entypo'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import AddCompanyReviewModal from '../AddCompanyReviewModal'

const GET_COMPANIES = gql`
  query companies($companyFilterInput: CompanyFilterInput!) {
    companies(companyFilterInput: $companyFilterInput) {
      id
      name
      email
      about
      rating
      profilePicture
      reviewCount
    }
  }
`
class ReviewsScreen extends Component {
  state = {
    searchText: '',
    tab: 0,
    showSearchModal: false,
    showAddReview: false,
    companyId: '',
    companyName: '',
    picture: '',
  }

  updateText = searchText => {
    this.setState({ searchText })
  }
  changeTab = value => {
    this.setState({ tab: value })
  }
  toggleSearchModal = () => {
    this.setState({ showSearchModal: !this.state.showSearchModal })
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
      <View>
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
          <Divider />
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
                      picture={item.profilePicture}
                      title={item.name}
                      rating={item.rating}
                      companyName={item.name}
                      companyId={item.id}
                      navigation={this.props.navigation}
                      numReviews={item.reviewCount}
                    />
                  )}
                />
              )
            }}
          </Query>
        </ScrollView>
        <AddReviewButton onPress={this.toggleSearchModal}>
          <Icon name="plus" size={18} color="white" />
        </AddReviewButton>
        <CompanySearchModal
          navigation={this.props.navigation}
          closeModal={this.toggleSearchModal}
          visible={this.state.showSearchModal}
          showAddReview={() =>
            this.setState({
              showAddReview: !this.state.showAddReview,
            })
          }
          setCompanyInfo={(companyId, companyName, picture) =>
            this.setState({
              companyId,
              companyName,
              picture,
            })
          }
        />
        <AddCompanyReviewModal
          state={this.state}
          isVisible={this.state.showAddReview}
          hideAddReview={() =>
            this.setState({
              showAddReview: !this.state.showAddReview,
              companyId: '',
              companyName: '',
              picture: '',
            })
          }
        />
      </View>
    )
  }
}

export default ReviewsScreen
