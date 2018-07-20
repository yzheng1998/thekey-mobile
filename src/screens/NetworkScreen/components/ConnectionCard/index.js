import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  Name,
  Subtitle,
  ProfileImage,
  TimeStamp,
  Container,
  Wrapper,
  TextWrapper,
  AcceptButton,
  DeleteButton,
  Confirm,
  Delete,
} from './styles'
import moment from 'moment'

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
          <TextWrapper>
            <Name>{name}</Name>
            <Subtitle>wants to connect</Subtitle>
          </TextWrapper>
          <TimeStamp>{formatTime(timeStamp)}</TimeStamp>
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
