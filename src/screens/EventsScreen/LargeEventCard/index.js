import React, { Component } from 'react'
import { Image } from 'react-native'
import {
  BackgroundImage,
  Card,
  TopContainer,
  PriceContainer,
  Price,
  StarButton,
  ContentContainer,
  DetailsContainer,
  DateTime,
  Title,
  Location,
  ClockIcon,
  LocationIcon,
  StarIcon,
} from './styles'
import PropTypes from 'prop-types'
import moment from 'moment'
import ConnectionsRow from '../../SocietyScreen/components/ConnectionsRow'

const TIME_ZONE_LEN = 3

function formatPrice(price) {
  if (price === 0.0) {
    return 'FREE'
  }
  return `$${price.toFixed(2)}`
}

function formatTimeStamp(timeStamp) {
  const parsedTimeStamp = timeStamp.substr(0, timeStamp.length - TIME_ZONE_LEN)
  const momentTimeStamp = moment(parsedTimeStamp, 'YYYY-MM-DD HH:mm:ss')
  const dayOfWeek = momentTimeStamp.format('ddd').toUpperCase()
  const month = momentTimeStamp.format('MMM').toUpperCase()
  const time = momentTimeStamp.format('h:mm A')
  const day = momentTimeStamp.format('D')
  return `${dayOfWeek}, ${day} ${month} @ ${time}`
}

export default class LargeEventsCard extends Component {
  static defaultProps = {
    price: 0.0,
    mutualFriends: null,
  }

  static propTypes = {
    image: Image.propTypes.source.isRequired,
    price: PropTypes.number,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    mutualFriends: PropTypes.arrayOf(Object),
  }

  render() {
    const {
      image,
      price,
      title,
      location,
      timeStamp,
      mutualFriends,
    } = this.props
    const selectMutualFriends = [...mutualFriends].slice(0, 5)
    return (
      <Card activeOpacity={0.9}>
        <BackgroundImage source={image} />
        <TopContainer>
          <PriceContainer>
            <Price>{formatPrice(price)}</Price>
          </PriceContainer>
          <StarButton>
            <StarIcon name="star" size={28} />
          </StarButton>
        </TopContainer>
        <ContentContainer>
          <DetailsContainer>
            <ClockIcon name="clock" size={19} />
            <DateTime>{formatTimeStamp(timeStamp)}</DateTime>
          </DetailsContainer>
          <Title numberOfLines={3}>{title} </Title>
          <DetailsContainer>
            <LocationIcon name="location" size={25} />
            <Location>{location}</Location>
          </DetailsContainer>
        </ContentContainer>
        mutualFriends && {mutualFriends > 0} &&
        <ConnectionsRow
          avatarNum={5}
          avatarSize={30}
          connectionsNum={mutualFriends.length}
          mutualFriends={selectMutualFriends}
          customLabel="interestedFriends"
        />
      </Card>
    )
  }
}
