import React, { Component } from 'react'
import { FlatList, ScrollView, View, RefreshControl } from 'react-native'
import MessageBubble from '../MessageBubble'
import {
  Name,
  InstructionText,
  InstructionContainer,
  Avatar,
  GroupMessageContainer,
  WideMessageContainer,
  Screen,
} from './styles'

function isSendersFirstMessage(chat, item) {
  // locate the current message and the one before it, and compare sender ids
  const messageIds = chat.messages.nodes.map(m => m.id)
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

const InstructionHeader = ({ moreMessages }) => {
  if (moreMessages)
    return (
      <InstructionContainer>
        <InstructionText>Pull to load more</InstructionText>
      </InstructionContainer>
    )
  return null
}

class MessagesDisplay extends Component {
  state = {
    refreshing: false,
  }

  componentDidMount() {
    this.props.subscribe()
  }

  loadMore = (moreMessages, onRefresh) => {
    if (moreMessages) {
      this.setState({ refreshing: true })
      onRefresh().then(() => {
        this.setState({ refreshing: false })
      })
    }
  }

  render() {
    const { chat, userId, isGroupMessage, onRefresh, flatListRef } = this.props
    const moreMessages = chat.messages.nodes.length < chat.messages.totalCount
    return (
      <Screen>
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            width: '100%',
          }}
          keyboardShouldPersistTaps="handled"
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => this.loadMore(moreMessages, onRefresh)}
            />
          }
        >
          <FlatList
            ref={flatListRef}
            keyExtractor={message => message.id}
            data={chat.messages.nodes}
            ListFooterComponent={
              <InstructionHeader moreMessages={moreMessages} />
            }
            inverted
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
        </ScrollView>
      </Screen>
    )
  }
}
export default MessagesDisplay
