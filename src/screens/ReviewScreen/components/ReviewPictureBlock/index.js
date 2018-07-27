import React, { Component } from 'react'
import {
  Container,
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
    const {
      picture,
      title,
      rating,
      reviews,
      companyId,
      refreshData,
    } = this.props
    return (
      <Container>
        <PictureHeader picture={picture} avatarSize={123}>
          <DescriptionContainer>
            <Title>{title}</Title>
            <RatingStar rating={rating} color="white" />
            <Reviews>{reviews} Total Reviews</Reviews>
          </DescriptionContainer>
          <AddReviewButton
            onPress={() =>
              this.props.navigation.navigate('AddCompanyReview', {
                companyId,
                refreshData,
              })
            }
          >
            <AddReviewText>ADD REVIEW</AddReviewText>
          </AddReviewButton>
        </PictureHeader>
      </Container>
    )
  }
}

export default ReviewPictureBlock
