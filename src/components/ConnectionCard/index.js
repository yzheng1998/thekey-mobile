import React, { Component } from 'react'
import { Image } from 'react-native'
import PropTypes from 'prop-types'
import {
  Card,
  Name,
  Subtitle,
  ProfileImage,
  TimeStamp,
  Container,
  Wrapper,
  TimeWrapper,
  AcceptButton,
  DeleteButton,
  Confirm,
  Delete,
} from './styles'
import moment from 'moment'

class ConnectionCard extends Component {
  static defaultProps = {
    onPress: null,
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
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
    const { name, profileImage, timeStamp, onPress } = this.props
    return (
      <Card onPress={onPress}>
        <ProfileImage source={profileImage} />
        <Container>
          <Wrapper>
            <Name numberOfLines={1}>{name}</Name>
            <Subtitle>wants to connect</Subtitle>
            <TimeWrapper>
              <TimeStamp>{formatTime(timeStamp)}</TimeStamp>
            </TimeWrapper>
          </Wrapper>
          <Wrapper>
            <AcceptButton>
              <Confirm>Confirm</Confirm>
            </AcceptButton>
            <DeleteButton>
              <Delete>Delete</Delete>
            </DeleteButton>
          </Wrapper>
        </Container>
      </Card>
    )
  }
}
export default ConnectionCard
