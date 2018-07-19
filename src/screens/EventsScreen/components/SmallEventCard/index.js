import React, { Component } from 'react'
import {
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
} from './styles'
import StarButton from '../../../../components/EventStarButton'
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
  constructor(props) {
    super(props)
    this.state = { isInterested: false }
  }

  select = () => {
    this.setState({ isInterested: !this.state.isInterested })
  }

  render() {
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
    const image =
      'https://c1.staticflickr.com/2/1679/25672866665_4ccec2fd37_b.jpg'
    const { title, id, dateRange } = this.props.event

    const usableTimeStamp = new Date(dateRange[0]).toISOString()
    const selectMutualFriends = [...interestedFriends].slice(0, 5)
    return (
      <Card
        width={this.props.width}
        activeOpacity={0.9}
        onPress={() =>
          this.props.navigation.navigate('Event', {
            id,
          })
        }
      >
        <BackgroundImage source={{ uri: image }} />
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
              <StarButton
                onPress={this.select}
                isInterested={this.state.isInterested}
                id={id}
              />
            </RowContainer>
          </ContentContainer>
        </FullContainer>
        {interestedFriends &&
          interestedFriends.length > 0 && (
            <InterestedFriendsRow
              navigation={this.props.navigation}
              avatarNum={5}
              avatarSize={22}
              connectionsNum={interestedFriends.length}
              interestedFriends={selectMutualFriends}
            />
          )}
      </Card>
    )
  }
}
