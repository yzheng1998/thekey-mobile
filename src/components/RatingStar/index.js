import Star from 'react-native-vector-icons/FontAwesome'
import React, { Component } from 'react'
import { StarContainer, RatingContainer, RateText } from './styles'
import _ from 'lodash'

export default class RatingStar extends Component {
  render() {
    const { rating, color } = this.props
    const stars = _.range(Math.round(rating)).map(() => (
      <StarContainer>
        <Star name="star" size={16} color={color} />
      </StarContainer>
    ))
    return (
      <RatingContainer>
        {stars}
        <RateText color={color}>{this.props.rating}</RateText>
      </RatingContainer>
    )
  }
}
