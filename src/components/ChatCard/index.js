import React, { Component } from 'react'
import { Image } from 'react-native'
import PropTypes from 'prop-types'
import {
  Card,
  Name,
  Message,
  ProfileImage,
  TimeStamp,
  Wrapper,
  TitleWrapper,
  TitleWrapper2,
} from './styles'
import moment from 'moment'

export default class ChatCard extends Component {
  static defaultProps = {
    onPress: null,
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    profileImage: Image.propTypes.source.isRequired,
    timeStamp: PropTypes.string.isRequired,
    onPress: PropTypes.func,
  }

  render() {
    const formatTime = time => {
      const result = moment().isSame(moment(time), 'day')
        ? moment(time).format('h:mma')
        : moment(time).format('MM/DD/YYYY')
      return result
    }
    const { name, message, profileImage, timeStamp, onPress } = this.props
    console.log('profileImage', profileImage)
    return (
      <Card onPress={onPress}>
        <ProfileImage source={{ uri: profileImage }} />
        <Wrapper>
          <TitleWrapper>
            <Name numberOfLines={1}>{name}</Name>
            <TitleWrapper2>
              <TimeStamp>{formatTime(timeStamp)}</TimeStamp>
            </TitleWrapper2>
          </TitleWrapper>
          <Message numberOfLines={2}>{message}</Message>
        </Wrapper>
      </Card>
    )
  }
}
