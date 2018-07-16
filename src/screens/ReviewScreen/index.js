import React, { Component } from 'react'
import FilterBlock from './components/FilterBlock'
import ReviewBlock from './components/ReviewBlock'
import ReviewPictureBlock from './components/ReviewPictureBlock'
import { Background } from './styles'
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
    }
  }
`
export default class ReviewScreen extends Component {
  state = {
    tab: 0,
  }
  changeTab = value => {
    this.setState({ tab: value })
  }
  render() {
    const { title, rating, companyId } = this.props.navigation.state.params
    const tabs = {
      ALL: 0,
      FULLTIME: 1,
      PARTTIME: 2,
      INTERNSHIP: 3,
    }
    const setEmploymentType = tab => {
      switch (tab) {
        case tabs.ALL:
          return null
        case tabs.FULLTIME:
          return 'FULLTIME'
        case tabs.PARTTIME:
          return 'PARTTIME'
        case tabs.INTERNSHIP:
          return 'INTERNSHIP'
        default:
          return null
      }
    }

    const variables = {
      companyReviewFilterInput: {
        companyId,
        employmentType: setEmploymentType(this.state.tab),
      },
    }
    return (
      <Query query={GET_COMPANY_REVIEWS} variables={variables}>
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading...</Text>
          if (error) return <Text>Error! ${error.message}</Text>
          return (
            <Background>
              <ReviewPictureBlock
                // get pictures from props but hardcode for now
                picture={{
                  uri:
                    'https://images.unsplash.com/photo-1521058001910-55b77aba2203?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=16e03fd1b22a1e9b694c0d2c3457b57a&auto=format&fit=crop&w=1947&q=80',
                }}
                title={title}
                rating={rating}
                reviews={data.companyReviews.length}
              />
              <FilterBlock updateState={this.changeTab} />
              <FlatList
                keyExtractor={review => review.id}
                data={data.companyReviews}
                renderItem={({ item: review }) => (
                  <ReviewBlock
                    subject={review.title}
                    date="placeholder date"
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
