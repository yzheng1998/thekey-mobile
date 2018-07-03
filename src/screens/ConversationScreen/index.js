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
    const messages = conversation.messages.slice()

    const handlePress = () => {
      this.flatList.scrollToOffset({ x: 0, y: 0, animated: true })
    }

    return (
      <Background>
        <MessageContainer>
          <FlatList
            inverted
            ref={el => {
              this.flatList = el
            }}
            keyExtractor={message => message.id}
            data={messages.reverse()}
            renderItem={({ item }) => (
              <MessageBubble
                key={item.id}
                isUser={item.sender.id === viewer.id}
                message={item.content}
              />
            )}
          />
        </MessageContainer>
        <MessageInput onPress={handlePress} chatId={conversation.id} />
        <KeyboardSpacer />
      </Background>
    )
  }
}

export default ConversationScreen
