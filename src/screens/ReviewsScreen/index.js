import React, { Component } from 'react'
import { AddReviewButton, ThinDivider } from './styles'
import { FlatList, ScrollView, View, StatusBar } from 'react-native'
import CompanyCard from '../../components/CompanyCard'
import CompanySearchModal from './components/CompanySearchModal'
import SearchBar from '../../components/SearchBar'
import ReviewsHeader from './components/ReviewsHeader'
import Icon from 'react-native-vector-icons/Entypo'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import AddCompanyReviewModal from '../AddCompanyReviewModal'
import LoadingWrapper from '../../components/LoadingWrapper'

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
        <StatusBar barStyle="light-content" />
        <ScrollView keyboardShouldPersistTaps="handled">
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
          <ThinDivider />
          <Query query={GET_COMPANIES} variables={variables}>
            {({ loading, data, refetch }) => {
              if (loading) return <LoadingWrapper loading />
              return (
                <View>
                  <FlatList
                    keyboardShouldPersistTaps="handled"
                    keyExtractor={company => company.id}
                    data={data.companies}
                    renderItem={({ item }) => (
                      <CompanyCard
                        refetchCompanies={refetch}
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
                  <AddCompanyReviewModal
                    refetchReviews={refetch}
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
      </View>
    )
  }
}

export default ReviewsScreen
