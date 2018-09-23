import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { Background, ScrollScreen, ThinDivider, SearchModal } from './styles'
import CompanyCard from '../../../../components/CompanyCard'
import SearchModalHeader from '../SearchModalHeader'
import SearchBar from '../../../../components/SearchBar'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import LoadingWrapper from '../../../../components/LoadingWrapper'

const defaultImage =
  'https://images.unsplash.com/photo-1486108334972-f02b6c78ba07?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7b5a12ea524ae41d923b50f2e43f1cb8&auto=format&fit=crop&w=1500&q=80'

const GET_REVIEWABLE_COMPANIES = gql`
  query reviewableCompanies(
    $reviewableCompanyFilterInput: ReviewableCompanyFilterInput!
  ) {
    reviewableCompanies(
      reviewableCompanyFilterInput: $reviewableCompanyFilterInput
    ) {
      id
      name
      image
      sector
      rating
      reviews {
        id
        rating
        title
        pros
        cons
        employmentType
        current
        jobTitle
        location
        lastWorked
        createdAt
      }
    }
  }
`

export default class CompanySearchModal extends Component {
  static navigationOptions = {
    header: 'Search Companies',
  }

  state = {
    searchText: '',
  }

  updateText = searchText => {
    this.setState({ searchText })
  }

  render() {
    const variables = {
      reviewableCompanyFilterInput: {
        name: this.state.searchText,
        highestRated: false,
      },
    }
    const {
      closeModal,
      showAddReview,
      setCompanyInfo,
      navigation,
      state,
      isVisible,
    } = this.props
    const closeSearchModal = () => {
      this.setState({
        searchText: '',
      })
      closeModal()
    }

    return (
      <SearchModal
        onModalHide={() => {
          if (state.companyName) showAddReview()
        }}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        isVisible={isVisible}
      >
        <Background>
          <SearchModalHeader closeModal={closeSearchModal} />
          <SearchBar
            updateText={this.updateText}
            searchText={this.state.searchText}
            placeholderText="Search for a company"
          />
          <ThinDivider />
          <ScrollScreen keyboardShouldPersistTaps="handled">
            <Query query={GET_REVIEWABLE_COMPANIES} variables={variables}>
              {({ loading, data }) => {
                if (loading) return <LoadingWrapper loading />
                return (
                  <FlatList
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                    keyExtractor={company => company.id}
                    data={data.reviewableCompanies}
                    renderItem={({ item }) => (
                      <CompanyCard
                        onPress={() => {
                          closeSearchModal()
                          setCompanyInfo(
                            item.id,
                            item.name,
                            item.image || defaultImage,
                          )
                        }}
                        title={item.name}
                        rating={item.rating}
                        companyId={item.id}
                        navigation={navigation}
                        picture={item.image || defaultImage}
                      />
                    )}
                  />
                )
              }}
            </Query>
          </ScrollScreen>
        </Background>
      </SearchModal>
    )
  }
}
