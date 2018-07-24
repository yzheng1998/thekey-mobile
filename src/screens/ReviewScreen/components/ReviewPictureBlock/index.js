import React, { Component } from 'react'
import {
  HeaderContainer,
  DescriptionContainer,
  Title,
  Reviews,
  AddReviewButton,
  AddReviewText,
  BackButtonContainer,
} from './styles'
import BackButton from 'react-native-vector-icons/Ionicons'
import PictureHeader from '../../../../components/PictureHeader'
import RatingStar from '../../../../components/RatingStar'

class ReviewPictureBlock extends Component {
  render() {
    const { picture, title, rating, reviews } = this.props
    return (
      <HeaderContainer>
        <PictureHeader picture={picture} avatarSize={123}>
          <BackButtonContainer onPress={() => this.props.navigation.goBack()}>
            <BackButton name="ios-arrow-back" size={27} color="white" />
          </BackButtonContainer>
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
