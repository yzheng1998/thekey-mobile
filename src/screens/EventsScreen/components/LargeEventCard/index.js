import React, { Component } from 'react'
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
} from './styles'
import PropTypes from 'prop-types'
import moment from 'moment'
import InterestedFriendsRow from '../InterestedFriendsRow'
import Star from 'react-native-vector-icons/FontAwesome'

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
    interestedFriends: [],
  }

  static propTypes = {
    image: PropTypes.string.isRequired,
    price: PropTypes.number,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    interestedFriends: PropTypes.arrayOf(Object),
  }

  constructor(props) {
    super(props)
    this.state = { isInterested: false }
  }
  render() {
    const {
      image,
      price,
      title,
      location,
      timeStamp,
      interestedFriends,
    } = this.props
    const selectMutualFriends = [...interestedFriends].slice(0, 5)
    return (
      <Card activeOpacity={0.9}>
        <BackgroundImage source={{ uri: image }}>
          <TopContainer>
            <PriceContainer>
              <Price>{formatPrice(price)}</Price>
            </PriceContainer>
            <StarButton
              onPress={() =>
                this.setState({ isInterested: !this.state.isInterested })
              }
            >
              <Star
                name={this.state.isInterested ? 'star' : 'star-o'}
                size={27}
                color="white"
              />
            </StarButton>
          </TopContainer>
          <ContentContainer>
            <DetailsContainer>
              <ClockIcon name="clock" size={19} />
              <DateTime>{formatTimeStamp(timeStamp)}</DateTime>
            </DetailsContainer>
            <Title numberOfLines={3}>{title}</Title>
            <DetailsContainer>
              <LocationIcon name="location" size={25} />
              <Location>{location}</Location>
            </DetailsContainer>
          </ContentContainer>
          interestedFriends && {interestedFriends.length > 0} &&
          <InterestedFriendsRow
            avatarNum={5}
            avatarSize={30}
            connectionsNum={interestedFriends.length}
            interestedFriends={selectMutualFriends}
          />
        </BackgroundImage>
      </Card>
    )
  }
}
