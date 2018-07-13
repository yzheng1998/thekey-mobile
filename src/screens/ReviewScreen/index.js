import React, { Component } from 'react'
import FilterBlock from './components/FilterBlock'
import ReviewBlock from './components/ReviewBlock'
import ReviewPictureBlock from './components/ReviewPictureBlock'
import { Background } from './styles'
import { FlatList } from 'react-native'

export default class ReviewScreen extends Component {
  state = {
    selectedTabIndex: 0,
  }
  render() {
    const { reviews, company, picture, averageRating, numReviews } = this.props

    return (
      <Background>
        <ReviewPictureBlock
          picture={picture}
          title={company}
          rating={averageRating}
          reviews={numReviews}
        />
        <FilterBlock />
        <FlatList
          keyExtractor={review => review.id}
          data={reviews}
          renderItem={({ item: review }) => (
            <ReviewBlock
              subject={review.title}
              date={review.date}
              rating={review.rating}
              role={review.currentOrFormerEmployee}
              position={review.jobPosition}
              location={review.location}
              pros={review.pros}
              cons={review.cons}
            />
          )}
        />
      </Background>
    )
  }
}
