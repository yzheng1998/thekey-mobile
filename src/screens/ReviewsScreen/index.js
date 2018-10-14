import React, { Component } from 'react'
import { AddReviewButton, ThinDivider } from './styles'
import { FlatList, View, StatusBar } from 'react-native'
import CompanyCard from '../../components/CompanyCard'
import CompanySearchModal from './components/CompanySearchModal'
import SearchBar from '../../components/SearchBar'
import ReviewsHeader from './components/ReviewsHeader'
import Icon from 'react-native-vector-icons/Entypo'
import { Query } from 'react-apollo'
import AddCompanyReviewModal from '../AddCompanyReviewModal'
import LoadingWrapper from '../../components/LoadingWrapper'
import { GET_REVIEWABLE_COMPANIES } from './queries'
import { reviewableCompanyLimit } from '../../../config'

const defaultImage =
  'https://images.unsplash.com/photo-1486108334972-f02b6c78ba07?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7b5a12ea524ae41d923b50f2e43f1cb8&auto=format&fit=crop&w=1500&q=80'

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
      reviewableCompanyFilterInput: {
        name: this.state.searchText,
        highestRated: this.state.tab === 1,
      },
      offset: 0,
      limit: reviewableCompanyLimit,
    }
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <StatusBar barStyle="light-content" />
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
        <Query query={GET_REVIEWABLE_COMPANIES} variables={variables}>
          {({ loading, data, refetch, fetchMore }) => {
            if (loading) return <LoadingWrapper loading />
            return (
              <View>
                <FlatList
                  keyboardShouldPersistTaps="handled"
                  keyExtractor={reviewableCompany => reviewableCompany.id}
                  data={data.reviewableCompanies.nodes}
                  renderItem={({ item }) => (
                    <CompanyCard
                      refetchCompanies={refetch}
                      picture={item.image || defaultImage}
                      title={item.name}
                      rating={item.rating}
                      companyName={item.name}
                      companyId={item.id}
                      navigation={this.props.navigation}
                      numReviews={item.reviews.totalCount}
                    />
                  )}
                  onEndReachedThreshold={0.35}
                  onEndReached={() =>
                    fetchMore({
                      variables: {
                        ...variables,
                        offset: data.reviewableCompanies.nodes.length,
                      },
                      updateQuery: (prev, { fetchMoreResult }) => {
                        if (!fetchMoreResult) return prev

                        const newNodes = [
                          ...prev.reviewableCompanies.nodes,
                          ...fetchMoreResult.reviewableCompanies.nodes.filter(
                            n =>
                              !prev.reviewableCompanies.nodes.some(
                                p => p.id === n.id,
                              ),
                          ),
                        ]

                        const newQuery = {
                          ...prev,
                          reviewableCompanies: {
                            ...prev.reviewableCompanies,
                            nodes: newNodes,
                            pageInfo:
                              fetchMoreResult.reviewableCompanies.pageInfo,
                          },
                        }

                        return newQuery
                      },
                    })
                  }
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
        <AddReviewButton onPress={this.toggleSearchModal}>
          <Icon name="plus" size={18} color="white" />
        </AddReviewButton>
        <CompanySearchModal
          state={this.state}
          navigation={this.props.navigation}
          closeModal={this.toggleSearchModal}
          isVisible={this.state.showSearchModal}
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
