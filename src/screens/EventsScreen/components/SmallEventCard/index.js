import React, { Component } from 'react'
import {
  BackgroundImage,
  Card,
  StarButton,
  FullContainer,
  ContentContainer,
  DetailsContainer,
  DateTime,
  Title,
  TimeIcon,
  StarIcon,
} from './styles'
import moment from 'moment'
import InterestedFriendsRow from '../InterestedFriendsRow'

const TIME_ZONE_LEN = 3

function formatTimeStamp(timeStamp) {
  const parsedTimeStamp = timeStamp.substr(0, timeStamp.length - TIME_ZONE_LEN)
  const momentTimeStamp = moment(parsedTimeStamp, 'YYYY-MM-DD HH:mm:ss')
  const dayOfWeek = momentTimeStamp.format('ddd').toUpperCase()
  const month = momentTimeStamp.format('MMM').toUpperCase()
  const time = momentTimeStamp.format('h:mm A')
  const day = momentTimeStamp.format('D')
  return `${dayOfWeek}, ${day} ${month} @ ${time}`
}

export default class SmallEventCard extends Component {
  render() {
    const { image, title, timeStamp, mutualFriends } = this.props.event
    const selectMutualFriends = [...mutualFriends].slice(0, 5)
    return (
      <Card width={this.props.width} activeOpacity={0.9}>
        <BackgroundImage source={image} />
        <FullContainer>
          <ContentContainer>
            <DetailsContainer>
              <TimeIcon name="clock" size={19} />
              <DateTime>{formatTimeStamp(timeStamp)}</DateTime>
            </DetailsContainer>
            <Title numberOfLines={1}>{title} </Title>
          </ContentContainer>
          <StarButton>
            <StarIcon name="star" size={25} />
          </StarButton>
        </FullContainer>
        mutualFriends && {mutualFriends.length > 0} &&
        <InterestedFriendsRow
          avatarNum={5}
          avatarSize={22}
          connectionsNum={mutualFriends.length}
          mutualFriends={selectMutualFriends}
        />
      </Card>
    )
  }
}
