import React, { Component } from 'react'
import { Image } from 'react-native'
import { Card, LeftContainer, Title, Description } from './styles'
import Rating from './components/RatingStar'

export default class ReviewCard extends Component {
  render() {
    const { picture, title, reviews, rating } = this.props.review
    return (
      <Card>
        <Image source={picture} style={{ width: 46, height: 46 }} />
        <LeftContainer>
          <Title>{title}</Title>
          <Rating rating={rating} />
          <Description>{reviews} Total Reviews</Description>
        </LeftContainer>
      </Card>
    )
  }
}
