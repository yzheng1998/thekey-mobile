import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  Name,
  Subtitle,
  ProfileImage,
  TimeStamp,
  Container,
  Content,
  ButtonRow,
  TextContainer,
} from './styles'
import moment from 'moment'
import AcceptFriendRequestButton from '../AcceptFriendRequestButton'
import RejectFriendRequestButton from '../RejectFriendRequestButton'

class ConnectionCard extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
  }

  render() {
    const formatTime = time => {
      const result = moment().isSame(moment(time), 'day')
        ? moment(time).format('h:mma')
        : moment(time).format('MM/DD/YY')
      return result
    }
    const { name, picture, timeStamp, id } = this.props
    return (
      <Card>
        <ProfileImage source={{ uri: picture }} />
        <Container>
          <Content>
            <TextContainer>
              <Name>{name} </Name>
              <Subtitle>wants to connect</Subtitle>
            </TextContainer>
            <ButtonRow>
              <AcceptFriendRequestButton friendRequestId={id} />
              <RejectFriendRequestButton friendRequestId={id} />
            </ButtonRow>
          </Content>
          <TimeStamp>{formatTime(timeStamp)}</TimeStamp>
        </Container>
      </Card>
    )
  }
}
export default ConnectionCard
