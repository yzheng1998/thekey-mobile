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
import RatingStar from '../../../../components/RatingStar'
import PersonIcon from 'react-native-vector-icons/Feather'
import LocationIcon from 'react-native-vector-icons/SimpleLineIcons'

const moment = require('moment')

export default class ReviewBlock extends Component {
  static defaultProps = {
    subject: '"Great company, great people"',
    date: '2018-07-09 13:27:03.246-04',
    rating: 4.4,
    role: 'Current Employee',
    position: 'General Manager',
    location: 'San Francisco',
    pros:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    cons:
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
      pros,
      cons,
    } = this.props
    return (
      <Card>
        <SubTitle>{moment(date).format('MM/DD/YYYY')}</SubTitle>
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
          <Comment ellipsizeMode="tail">{pros}</Comment>
        </Container>
        <SecondaryTitle>Cons</SecondaryTitle>
        <Container>
          <Comment ellipsizeMode="tail">{cons}</Comment>
        </Container>
      </Card>
    )
  }
}
