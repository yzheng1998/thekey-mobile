import React, { Component } from 'react'
import { FlatList } from 'react-native'
import MessageBubble from './components/MessageBubble'
import MessageInput from './components/MessageInput'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import { Background, MessageContainer } from './styles'

class ConversationScreen extends Component {
  render() {
    const conversation = this.props.navigation.getParam('chat')
    const viewer = this.props.navigation.getParam('viewer')
    return (
      <Background>
        <MessageContainer>
          <FlatList
            keyExtractor={message => message.id}
            data={conversation.messages}
            renderItem={({ item }) => (
              <MessageBubble
                key={item.id}
                isUser={item.sender.id === viewer.id}
                message={item.content}
              />
            )}
          />
        </MessageContainer>
        <MessageInput chatId={conversation.id} />
        <KeyboardSpacer />
      </Background>
    )
  }
}

export default ConversationScreen
