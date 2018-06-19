import React, { Component } from 'react'
import { ListItem } from 'react-native-elements'
import { FlatList, TextInput, View, Button, Text } from 'react-native'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const SEND_MESSAGE = gql`
  mutation sendMessage($sendMessageInput: sendMessageInput!) {
    sendMessage(sendMessageInput: $sendMessageInput) {
      message
      error
    }
  }
`

class ConversationScreen extends Component {
  state = {
    content: '',
    chatID: '',
  }

  render() {
    const conversation = this.props.navigation.getParam('chat')
    const viewer = this.props.navigation.getParam('viewer')
    return (
      <Mutation mutation={SEND_MESSAGE}>
        {(sendMessage, { loading, data }) => (
          <View>
            <FlatList
              keyExtractor={message => message.id}
              data={conversation.messages}
              renderItem={({ item }) => {
                const direction =
                  item.sender.id === viewer.id ? 'right' : 'left'
                return (
                  <ListItem
                    title={`${item.content}`}
                    titleStyle={{ textAlign: `${direction}` }}
                    hideChevron
                    style={{ width: 100 }}
                  />
                )
              }}
            />
            <TextInput
              placeholder="Write message here!"
              backgroundColor="white"
              style={{ marginTop: 340, height: 100 }}
              onChangeText={text => this.setState({ content: text })}
            />
            {loading && <Text>Sending...</Text>}
            {data && data.error && <Text>{data.error.message}</Text>}
            <Button
              title="Send"
              onPress={() => {
                const variables = {
                  sendMessageInput: {
                    content: this.state.content,
                    chatID: conversation.id,
                  },
                }
                sendMessage({ variables })
              }}
            />
          </View>
        )}
      </Mutation>
    )
  }
}

export default ConversationScreen
