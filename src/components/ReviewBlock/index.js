import React, { Component } from 'react'
import {
  Card,
  Title,
  SubTitle,
  RatingContainer,
  IconContainer,
  SecondaryTitle,
  Comment,
  Container,
} from './styles'
import RatingStar from '../RatingStar'
import PersonIcon from 'react-native-vector-icons/Feather'
import LocationIcon from 'react-native-vector-icons/SimpleLineIcons'

const moment = require('moment')

export default class ReviewCard extends Component {
  static defaultProps = {
    subject: '"Great company, great people"',
    date: '2018-07-09 13:27:03.246-04',
    rating: 4.4,
    role: 'Current Employee',
    position: 'General Manager',
    location: 'San Francisco',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  }
  render() {
    const {
      subject,
      date,
      rating,
      role,
      position,
      location,
      comment,
    } = this.props
    return (
      <Card>
        <SubTitle>{moment(date).format('DD/MM/YYYY')}</SubTitle>
        <Title>{subject}</Title>
        <RatingContainer>
          <RatingStar rating={rating} scoreOff />
        </RatingContainer>
        <SubTitle>
          <IconContainer>
            <PersonIcon name="user" size={15} color="rgb(176,186,200)" />
          </IconContainer>
          {role} - {position}
        </SubTitle>
        <SubTitle>
          <IconContainer>
            <LocationIcon
              name="location-pin"
              size={15}
              color="rgb(176,186,200)"
            />
          </IconContainer>
          {location}
        </SubTitle>
        <SecondaryTitle>Pros</SecondaryTitle>
        <Container>
          <Comment numberOfLines={3} ellipsizeMode="tail">
            {comment}
          </Comment>
        </Container>
        <SecondaryTitle>Cons</SecondaryTitle>
        <Container>
          <Comment numberOfLines={3} ellipsizeMode="tail">
            {comment}
          </Comment>
        </Container>
      </Card>
    )
  }
}
