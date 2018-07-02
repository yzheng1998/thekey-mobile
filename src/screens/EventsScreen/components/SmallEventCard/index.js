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
} from './styles'
import PropTypes from 'prop-types'
import moment from 'moment'
import InterestedFriendsRow from '../InterestedFriendsRow'
import Star from 'react-native-vector-icons/FontAwesome'

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
  static defaultProps = {
    interestedFriends: null,
  }

  static propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    interestedFriends: PropTypes.arrayOf(Object),
  }

  constructor(props) {
    super(props)
    this.state = { isInterested: false }
  }

  render() {
    const { image, title, timeStamp, interestedFriends } = this.props.event
    const selectMutualFriends = [...interestedFriends].slice(0, 5)
    return (
      <Card width={this.props.width} activeOpacity={0.9}>
        <BackgroundImage source={{ uri: image }} />
        <FullContainer>
          <ContentContainer>
            <DetailsContainer>
              <TimeIcon name="clock" size={19} />
              <DateTime>{formatTimeStamp(timeStamp)}</DateTime>
            </DetailsContainer>
            <Title numberOfLines={1}>{title} </Title>
          </ContentContainer>
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
        </FullContainer>
        interestedFriends && {interestedFriends.length > 0} &&
        <InterestedFriendsRow
          avatarNum={5}
          avatarSize={22}
          connectionsNum={interestedFriends.length}
          interestedFriends={selectMutualFriends}
        />
      </Card>
    )
  }
}
