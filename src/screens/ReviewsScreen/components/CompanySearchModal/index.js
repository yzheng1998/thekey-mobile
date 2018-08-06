import React, { Component } from 'react'
import { Modal, FlatList, Text } from 'react-native'
import { Background, ScrollScreen, ThinDivider } from './styles'
import CompanyCard from '../../../../components/CompanyCard'
import SearchModalHeader from '../SearchModalHeader'
import SearchBar from '../../../../components/SearchBar'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const GET_COMPANIES = gql`
  query companies($companyFilterInput: CompanyFilterInput!) {
    companies(companyFilterInput: $companyFilterInput) {
      id
      name
      email
      about
      rating
      profilePicture
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
      companyFilterInput: {
        name: this.state.searchText,
        highestRated: false,
      },
    }
    const {
      closeModal,
      showAddReview,
      setCompanyInfo,
      navigation,
      ...rest
    } = this.props
    const closeSearchModal = () => {
      this.setState({
        searchText: '',
      })
      closeModal()
    }

    return (
      <Modal onDismiss={showAddReview} animationType="slide" {...rest}>
        <Background>
          <SearchModalHeader closeModal={closeSearchModal} />
          <SearchBar
            updateText={this.updateText}
            searchText={this.state.searchText}
            placeholderText="Search for a company"
          />
          <ThinDivider />
          <ScrollScreen keyboardShouldPersistTaps="handled">
            <Query query={GET_COMPANIES} variables={variables}>
              {({ loading, error, data }) => {
                if (loading) return <Text>Loading...</Text>
                if (error) {
                  return <Text>Error! {error.message}</Text>
                }
                return (
                  <FlatList
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                    keyExtractor={company => company.id}
                    data={data.companies}
                    renderItem={({ item }) => (
                      <CompanyCard
                        onPress={() => {
                          closeSearchModal()
                          setCompanyInfo(
                            item.id,
                            item.name,
                            item.profilePicture,
                          )
                        }}
                        title={item.name}
                        rating={item.rating}
                        companyId={item.id}
                        navigation={navigation}
                        picture={item.profilePicture}
                      />
                    )}
                  />
                )
              }}
            </Query>
          </ScrollScreen>
        </Background>
      </Modal>
    )
  }
}
