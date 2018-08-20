import React, { Component } from 'react'
import {
  DescriptionContainer,
  Title,
  Reviews,
  AddReviewButton,
  AddReviewText,
} from './styles'
import PictureHeader from '../../../../components/PictureHeader'
import RatingStar from '../../../../components/RatingStar'

class ReviewPictureBlock extends Component {
  render() {
    const { picture, title, rating, reviews, showAddReview } = this.props
    return (
      <PictureHeader picture={picture} avatarSize={123}>
        <AddReviewButton onPress={showAddReview}>
          <AddReviewText>ADD REVIEW</AddReviewText>
        </AddReviewButton>
        <DescriptionContainer>
          <Title>{title}</Title>
          {rating && <RatingStar rating={rating} color="white" />}
          <Reviews>{reviews} Total Reviews</Reviews>
        </DescriptionContainer>
      </PictureHeader>
    )
  }
}

export default ReviewPictureBlock
