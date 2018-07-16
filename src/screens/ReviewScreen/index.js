import React, { Component } from 'react'
import FilterBlock from './components/FilterBlock'
import ReviewBlock from './components/ReviewBlock'
import ReviewPictureBlock from './components/ReviewPictureBlock'
import { Background } from './styles'
import { FlatList, Text } from 'react-native'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const GET_COMPANY_REVIEWS = gql`
  query companyReviews($CompanyReviewFilterInput: CompanyReviewFilterInput!) {
    companyReviews(CompanyReviewFilterInput: $CompanyReviewFilterInput) {
      id
      rating
      title
      pros
      cons
      employmentType
      current
      jobTitle
      location
      company
      lastWorked
    }
  }
`
export default class ReviewScreen extends Component {
  state = {
    tab: 0,
  }
  render() {
    const { companyReviewInfo } = this.props
    const tabs = {
      ALL: 0,
      FULL_TIME: 1,
      PART_TIME: 2,
      INTERNSHIP: 3,
    }
    const customVariable = tab => {
      switch (tab) {
        case tabs.ALL:
          return ''
        case tabs.FULL_TIME:
          return 'fullTime'
        case tabs.PART_TIME:
          return 'partTime'
        case tabs.INTERNSHIP:
          return 'internship'
        default:
          return ''
      }
    }

    const variables = {
      companyFilterInput: {
        employmentType: customVariable(this.state.tab),
      },
    }
    return (
      <Query query={GET_COMPANY_REVIEWS} variables={variables}>
        {({ loading, error, reviews }) => {
          if (loading) return <Text>Loading...</Text>
          if (error) return <Text>Error! ${error.message}</Text>
          return (
            <Background>
              <ReviewPictureBlock
                // get pictures from props but hardcode for now
                picture={{
                  source:
                    'https://images.unsplash.com/photo-1521058001910-55b77aba2203?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=16e03fd1b22a1e9b694c0d2c3457b57a&auto=format&fit=crop&w=1947&q=80',
                }}
                title={companyReviewInfo.name}
                rating={companyReviewInfo.rating}
                reviews={reviews.length}
              />
              <FilterBlock />
              <FlatList
                keyExtractor={review => review.id}
                data={reviews}
                renderItem={({ item: review }) => (
                  <ReviewBlock
                    subject={review.title}
                    date={review.date} // no date?
                    rating={review.rating}
                    role={review.current}
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
