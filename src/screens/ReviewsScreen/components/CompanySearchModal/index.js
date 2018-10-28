import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { Background, ThinDivider, SearchModal, NoResultText } from './styles'
import CompanyCard from '../../../../components/CompanyCard'
import SearchModalHeader from '../SearchModalHeader'
import SearchBar from '../../../../components/SearchBar'
import { Query, Mutation } from 'react-apollo'
import LoadingWrapper from '../../../../components/LoadingWrapper'
import { reviewableCompanyLimit } from '../../../../../config'
import { GET_REVIEWABLE_COMPANIES, CREATE_REVIEWABLE_COMPANY } from './queries'

const defaultImage =
  'https://images.unsplash.com/photo-1486108334972-f02b6c78ba07?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7b5a12ea524ae41d923b50f2e43f1cb8&auto=format&fit=crop&w=1500&q=80'

export default class CompanySearchModal extends Component {
  static navigationOptions = {
    header: 'Search Companies',
  }

  state = {
    searchText: '',
    noResults: false,
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
      offset: 0,
      limit: reviewableCompanyLimit,
    }
    const mutationVariables = {
      companyName: this.state.searchText,
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
        noResults: false,
      })
      closeModal()
    }

    const onCompleted = data => {
      closeSearchModal()
      setCompanyInfo(
        data.createReviewableCompany.reviewableCompany.id,
        data.createReviewableCompany.reviewableCompany.name,
        defaultImage,
      )
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
          <Mutation
            mutation={CREATE_REVIEWABLE_COMPANY}
            onCompleted={data => onCompleted(data)}
          >
            {createReviewableCompany => (
              <SearchBar
                updateText={this.updateText}
                searchText={this.state.searchText}
                placeholderText="Search for a company"
                onSubmitEditing={() => {
                  if (this.state.noResults) {
                    createReviewableCompany({ variables: mutationVariables })
                  }
                }}
                returnKeyType="next"
              />
            )}
          </Mutation>
          <ThinDivider />
          <Query query={GET_REVIEWABLE_COMPANIES} variables={variables}>
            {({ loading, data, fetchMore }) => {
              if (loading) return <LoadingWrapper loading />
              if (
                data.reviewableCompanies.nodes.length === 0 &&
                !this.state.noResults
              )
                this.setState({ noResults: true })
              if (
                data.reviewableCompanies.nodes.length > 0 &&
                this.state.noResults
              ) {
                this.setState({ noResults: false })
              }
              return this.state.noResults ? (
                <NoResultText>
                  {`Looks like ${
                    this.state.searchText
                  } has not been reviewed.\nPress 'Next' to be the first.`}
                </NoResultText>
              ) : (
                <FlatList
                  keyboardShouldPersistTaps="handled"
                  showsVerticalScrollIndicator={false}
                  keyExtractor={company => company.id}
                  data={data.reviewableCompanies.nodes}
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
              )
            }}
          </Query>
        </Background>
      </SearchModal>
    )
  }
}
