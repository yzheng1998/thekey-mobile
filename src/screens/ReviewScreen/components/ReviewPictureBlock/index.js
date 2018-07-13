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
  static defaultProps = {
    picture: {
      uri:
        'https://cdn.zeplin.io/5b18b9740bc6b2af45546408/assets/6FE3D570-0BE7-40CA-923D-A045ECA2830D.png',
    },
    title: 'Beats By Dre',
    rating: 4.4,
    reviews: 352,
  }
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
