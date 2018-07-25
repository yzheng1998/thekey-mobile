import React, { Component } from 'react'
import {
  BackgroundImage,
  Card,
  TopContainer,
  PriceContainer,
  Price,
  ContentContainer,
  DetailsContainer,
  DateTime,
  Title,
  Location,
  ClockIcon,
  LocationIcon,
} from './styles'
import StarButton from '../../../../components/EventStarButton'
import moment from 'moment'
import InterestedFriendsRow from '../InterestedFriendsRow'

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
  constructor(props) {
    super(props)
    this.state = { isInterested: false }
  }

  select = () => {
    this.setState({ isInterested: !this.state.isInterested })
  }

  render() {
    const image =
      'https://c1.staticflickr.com/2/1679/25672866665_4ccec2fd37_b.jpg'
    const usableTimeStamp = new Date(
      this.props.event.dateRange[0],
    ).toISOString()
    const { price, title, location, id, interestedFriends } = this.props.event
    const selectMutualFriends = [...interestedFriends].slice(0, 5)
    return (
      <Card
        activeOpacity={0.9}
        onPress={() =>
          this.props.navigation.navigate('Event', {
            id,
          })
        }
      >
        <BackgroundImage source={{ uri: image }}>
          <TopContainer>
            <PriceContainer>
              <Price>{formatPrice(price)}</Price>
            </PriceContainer>
            <StarButton
              onPress={this.select}
              isInterested={this.state.isInterested}
              id={id}
            />
          </TopContainer>
          <ContentContainer>
            <DetailsContainer>
              <ClockIcon name="clock" size={19} />
              <DateTime>{formatTimeStamp(usableTimeStamp)}</DateTime>
            </DetailsContainer>
            <Title numberOfLines={3}>{title}</Title>
            <DetailsContainer>
              <LocationIcon name="location" size={25} />
              <Location>{location}</Location>
            </DetailsContainer>
          </ContentContainer>
          {interestedFriends && (
            <InterestedFriendsRow
              navigation={this.props.navigation}
              avatarNum={5}
              avatarSize={30}
              connectionsNum={interestedFriends.length}
              interestedFriends={selectMutualFriends}
            />
          )}
        </BackgroundImage>
      </Card>
    )
  }
}
