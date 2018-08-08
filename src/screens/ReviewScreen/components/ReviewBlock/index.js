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
    const employeeInfo = position ? `${role} - ${position}` : role
    return (
      <Card>
        <SubTitle>{moment(new Date(date)).format('MM/DD/YYYY')}</SubTitle>
        <Title>{subject}</Title>
        <RatingContainer>
          <RatingStar rating={rating} scoreOff />
        </RatingContainer>
        <IconContainer>
          <PersonIcon name="user" size={15} color="rgb(176,186,200)" />
          <SubTitle>{employeeInfo}</SubTitle>
        </IconContainer>
        {location !== '' && (
          <IconContainer>
            <LocationIcon
              name="location-pin"
              size={15}
              color="rgb(176,186,200)"
            />
            <SubTitle>{location}</SubTitle>
          </IconContainer>
        )}
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
