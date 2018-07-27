import React, { Component } from 'react'
import FilterBlock from './components/FilterBlock'
import ReviewBlock from './components/ReviewBlock'
import ReviewPictureBlock from './components/ReviewPictureBlock'
import BackButton from 'react-native-vector-icons/Ionicons'
import { Background, Header, BackButtonContainer } from './styles'
import { FlatList, Text } from 'react-native'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const GET_COMPANY_REVIEWS = gql`
  query companyReviews($companyReviewFilterInput: CompanyReviewFilterInput!) {
    companyReviews(companyReviewFilterInput: $companyReviewFilterInput) {
      id
      rating
      title
      pros
      cons
      employmentType
      current
      jobTitle
      location
      company {
        id
      }
      lastWorked
      createdAt
    }
  }
`

const TABS = [null, 'FULLTIME', 'PARTTIME', 'INTERNSHIP']

export default class ReviewScreen extends Component {
  state = {
    tab: 0,
  }
  changeTab = value => {
    this.setState({ tab: value })
  }
  render() {
    const {
      title,
      rating,
      companyId,
      picture,
    } = this.props.navigation.state.params
    const variables = {
      companyReviewFilterInput: {
        companyId,
        employmentType: TABS[this.state.tab],
      },
    }
    return (
      <Query query={GET_COMPANY_REVIEWS} variables={variables}>
        {({ loading, error, data, refetch }) => {
          if (loading) return <Text>Loading...</Text>
          if (error) return <Text>Error! ${error.message}</Text>
          return (
            <Background>
              <ReviewPictureBlock
                picture={picture}
                title={title}
                rating={rating}
                reviews={data.companyReviews.length}
                navigation={this.props.navigation}
                companyId={companyId}
                refreshData={refetch}
              />
              <Header>
                <BackButtonContainer
                  onPress={() => this.props.navigation.goBack()}
                >
                  <BackButton name="ios-arrow-back" size={27} color="white" />
                </BackButtonContainer>
              </Header>
              <FilterBlock
                updateState={this.changeTab}
                selectedIndex={this.state.tab}
              />
              <FlatList
                keyExtractor={review => review.id}
                data={data.companyReviews}
                renderItem={({ item: review }) => (
                  <ReviewBlock
                    subject={review.title}
                    date={review.createdAt}
                    rating={review.rating}
                    role={
                      review.current ? 'Current Employee' : 'Former Employee'
                    }
                    position={review.jobTitle}
                    location={review.location}
                    pros={review.pros}
                    cons={review.cons}
                  />
                )}
              />
            </Background>
          )
        }}
      </Query>
    )
  }
}
