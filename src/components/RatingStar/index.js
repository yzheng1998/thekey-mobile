import Star from 'react-native-vector-icons/FontAwesome'
import React, { Component } from 'react'
import { StarContainer, RatingContainer, RateText } from './styles'
import _ from 'lodash'

export default class RatingStar extends Component {
  static defaultProps = {
    scoreOff: false,
  }
  render() {
    const { rating, scoreOff } = this.props
    const stars = _.range(Math.round(rating)).map(() => (
      <StarContainer>
        <Star name="star" size={16} color="rgb(250,53,121)" />
      </StarContainer>
    ))
    return (
      <RatingContainer>
        {stars}
        {!scoreOff && <RateText>{this.props.rating}</RateText>}
      </RatingContainer>
    )
  }
}
