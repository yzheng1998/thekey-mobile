import React, { Component } from 'react'
import {
  HeaderContainer,
  DescriptionContainer,
  Title,
  Reviews,
  Apply,
  ApplyButton,
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
          <Apply onPress={() => this.props.navigation.navigate('ApplyNow')}>
            <ApplyButton>ADD REVIEW</ApplyButton>
          </Apply>
        </PictureHeader>
      </HeaderContainer>
    )
  }
}

export default ReviewPictureBlock
