import Star from 'react-native-vector-icons/FontAwesome'
import React, { Component } from 'react'
import { StarContainer, RatingContainer, RateText } from './styles'
import _ from 'lodash'

export default class RatingStar extends Component {
  static defaultProps = {
    scoreOff: false,
    color: 'rgb(250,53,121)',
  }
  render() {
    const { rating, color, scoreOff } = this.props
    const stars = _.range(Math.round(rating)).map(() => (
      <StarContainer key={`${Math.random()}`}>
        <Star name="star" size={16} color={color} />
      </StarContainer>
    ))
    return (
      <RatingContainer>
        {stars}
        {!scoreOff && <RateText color={color}>{this.props.rating}</RateText>}
      </RatingContainer>
    )
  }
}
