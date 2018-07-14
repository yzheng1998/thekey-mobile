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
import StarButton from '../../../../components/StarButton'
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
    const interestedFriends = [
      {
        firstName: 'Yuke',
        id: 1,
        profilePicture: {
          uri:
            'https://scontent.fzty2-1.fna.fbcdn.net/v/t31.0-8/19095354_1322253334562342_5268478069300274794_o.jpg?_nc_cat=0&oh=5998f02ad58ac913850952492aaa62ba&oe=5BBDE33A',
        },
      },
      {
        firstName: 'Noah',
        id: 2,
        profilePicture: {
          uri: 'https://www.dev.hsa.net/img/team/Noah.jpg',
        },
      },
      {
        firstName: 'Humprey',
        id: 3,
        profilePicture: {
          uri: 'https://www.dev.hsa.net/img/team/humphrey.JPG',
        },
      },
      {
        firstName: 'Ivraj',
        id: 4,
        profilePicture: {
          uri: 'https://www.dev.hsa.net/img/team/Ivraj.jpg',
        },
      },
      {
        firstName: 'Jovi',
        id: 5,
        profilePicture: {
          uri: 'https://www.dev.hsa.net/img/team/Jovin.jpg',
        },
      },
    ]
    const usableTimeStamp = new Date(
      this.props.event.dateRange[0],
    ).toISOString()
    const { price, title, location, id } = this.props.event
    const selectMutualFriends = [...interestedFriends].slice(0, 5)
    return (
      <Card activeOpacity={0.9}>
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
          {interestedFriends &&
            interestedFriends.length > 0 && (
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
