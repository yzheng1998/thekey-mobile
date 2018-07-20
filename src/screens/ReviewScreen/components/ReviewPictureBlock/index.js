import React, { Component } from 'react'
import {
  HeaderContainer,
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
    const { picture, title, rating, reviews } = this.props
    return (
      <HeaderContainer>
        <PictureHeader picture={picture} avatarSize={123}>
          <DescriptionContainer>
            <Title>{title}</Title>
            <RatingStar rating={rating} color="white" />
            <Reviews>{reviews} Total Reviews</Reviews>
          </DescriptionContainer>
          <AddReviewButton
            onPress={() => this.props.navigation.navigate('AddCompanyReview')}
          >
            <AddReviewText>ADD REVIEW</AddReviewText>
          </AddReviewButton>
        </PictureHeader>
      </HeaderContainer>
    )
  }
}

export default ReviewPictureBlock
