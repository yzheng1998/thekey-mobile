import React, { Component } from 'react'
import { FlatList, View } from 'react-native'
import MessageBubble from '../MessageBubble'
import {
  Name,
  Avatar,
  GroupMessageContainer,
  WideMessageContainer,
  Screen,
} from './styles'

function isSendersFirstMessage(chat, item) {
  // locate the current message and the one before it, and compare sender ids
  const messageIds = chat.messages.map(m => m.id)
  if (messageIds.indexOf(item.id) + 1 >= messageIds.length) return true
  const previousMessageIndex = messageIds.indexOf(item.id) + 1
  const previousMessage = chat.messages[previousMessageIndex]
  return item.sender.id !== previousMessage.sender.id
}

const SenderGroupChatMessage = ({ chat, item, userId }) => (
  // show sender's names and pictures next to their message in a group chat
  // if it is not the sender's first message, don't show avatar/name but keep margins
  <View>
    {isSendersFirstMessage(chat, item) && (
      <View>
        <Name>
          {item.sender.firstName} {item.sender.lastName}
        </Name>
        <GroupMessageContainer>
          <Avatar source={{ uri: item.sender.profilePicture }} />
          <MessageBubble
            messageStyle="lowerLeft"
            key={item.id}
            isUser={item.sender.id === userId}
            message={item.content}
          />
        </GroupMessageContainer>
      </View>
    )}
    {isSendersFirstMessage(chat, item) === false && (
      <WideMessageContainer>
        <MessageBubble
          messageStyle="upperLeft"
          key={item.id}
          isUser={item.sender.id === userId}
          message={item.content}
        />
      </WideMessageContainer>
    )}
  </View>
)

class MessagesDisplay extends Component {
  componentDidMount() {
    this.props.subscribe()
  }
  render() {
    const { chat, userId, isGroupMessage } = this.props
    return (
      <Screen>
        <FlatList
          ref={this.props.flatListRef}
          inverted
          keyExtractor={message => message.id}
          data={chat.messages}
          renderItem={({ item }) => (
            <View>
              {isGroupMessage === true &&
                item.sender.id !== userId && (
                  <SenderGroupChatMessage
                    chat={chat}
                    item={item}
                    userId={userId}
                  />
                )}
              {(isGroupMessage === false ||
                (isGroupMessage && item.sender.id === userId)) && (
                <MessageBubble
                  key={item.id}
                  isUser={item.sender.id === userId}
                  message={item.content}
                />
              )}
            </View>
          )}
        />
      </Screen>
    )
  }
}
export default MessagesDisplay
