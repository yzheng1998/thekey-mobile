import React, { Component } from 'react'
import {
  AvatarRowContainer,
  BackgroundImage,
  Card,
  FullContainer,
  ContentContainer,
  RowContainer,
  DetailsContainer,
  DateTime,
  Title,
  TimeIcon,
  TitleContainer,
  Tint,
} from './styles'
import StarButton from '../../../../components/EventStarButton'
import moment from 'moment'
import InterestedFriendsRow from '../InterestedFriendsRow'
import defaultCardBackground from '../../../../../assets/eventCardImage.jpeg'

function formatTimeStamp(timeStamp) {
  const momentTimeStamp = moment(timeStamp, 'YYYY-MM-DD HH:mm:ss')
  const dayOfWeek = momentTimeStamp.format('ddd').toUpperCase()
  const month = momentTimeStamp.format('MMM').toUpperCase()
  const time = momentTimeStamp.format('h:mm A')
  const day = momentTimeStamp.format('D')
  return `${dayOfWeek}, ${day} ${month} @ ${time}`
}

export default class SmallEventCard extends Component {
  render() {
    const {
      picture,
      title,
      id,
      dateRange,
      interestedFriends,
      isInterested,
    } = this.props.event

    const usableTimeStamp = new Date(dateRange[0])
    const cardImage = picture ? { uri: picture } : defaultCardBackground
    return (
      <Card
        width={this.props.width}
        activeOpacity={0.9}
        onPress={() => this.props.navigate(id)}
      >
        <BackgroundImage source={cardImage}>
          <Tint>
            <FullContainer>
              <ContentContainer>
                <DetailsContainer>
                  <TimeIcon name="clock" size={19} />
                  {<DateTime>{formatTimeStamp(usableTimeStamp)}</DateTime>}
                </DetailsContainer>
                <RowContainer>
                  <TitleContainer>
                    <Title numberOfLines={1}>{title}</Title>
                  </TitleContainer>
                  <StarButton isInterested={isInterested} id={id} />
                </RowContainer>
              </ContentContainer>
            </FullContainer>
            <AvatarRowContainer>
              {interestedFriends && (
                <InterestedFriendsRow
                  navigate={this.props.navigateToPeopleList}
                  avatarNum={5}
                  avatarSize={22}
                  connectionsNum={interestedFriends.length}
                  interestedFriends={interestedFriends}
                />
              )}
            </AvatarRowContainer>
          </Tint>
        </BackgroundImage>
      </Card>
    )
  }
}
