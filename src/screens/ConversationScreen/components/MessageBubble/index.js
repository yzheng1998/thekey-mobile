import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { MessageContainer, MessageText } from './styles'

export default class MessageBubble extends Component {
  static propTypes = {
    isUser: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    messageStyle: PropTypes.oneOf([
      'upperLeft',
      'upperRight',
      'lowerLeft',
      'lowerRight',
      'none',
    ]),
  }
  static defaultProps = {
    messageStyle: 'none',
  }
  render() {
    const { isUser, message, messageStyle } = this.props
    return (
      <MessageContainer isUser={isUser} tailPosition={messageStyle}>
        <MessageText>{message}</MessageText>
      </MessageContainer>
    )
  }
}
