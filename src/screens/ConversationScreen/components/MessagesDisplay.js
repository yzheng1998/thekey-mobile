import React, { Component } from 'react'

import { FlatList } from 'react-native'
import MessageBubble from './MessageBubble'
import styled from 'styled-components'

export const MessageContainer = styled.View`
  flex: 1;
  padding-top: 5px;
  padding-left: 10px;
  padding-right: 10px;
`

class MessagesDisplay extends Component {
  componentDidMount() {
    this.props.subscribe()
  }
  render() {
    const { chat, userId } = this.props
    return (
      <MessageContainer>
        <FlatList
          ref={el => {
            this.flatList = el
          }}
          inverted
          keyExtractor={message => message.id}
          data={chat.messages}
          renderItem={({ item }) => (
            <MessageBubble
              key={item.id}
              isUser={item.sender.id === userId}
              message={item.content}
            />
          )}
        />
      </MessageContainer>
    )
  }
}
export default MessagesDisplay
