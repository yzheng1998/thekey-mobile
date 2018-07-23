import Star from 'react-native-vector-icons/FontAwesome'
import React, { Component } from 'react'
import { StarContainer, RatingContainer, RateText } from './styles'
import _ from 'lodash'
import uuidv4 from 'uuid/v4'

export default class RatingStar extends Component {
  render() {
    const { rating } = this.props
    const stars = _.range(Math.round(rating)).map(() => (
      <StarContainer key={uuidv4()}>
        <Star name="star" size={16} color="rgb(250,53,121)" />
      </StarContainer>
    ))
    return (
      <RatingContainer>
        {stars}
        <RateText>{this.props.rating}</RateText>
      </RatingContainer>
    )
  }
}
