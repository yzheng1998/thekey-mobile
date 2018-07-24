import { AsyncStorage, View, Text } from 'react-native'
import React, { Component } from 'react'
import { Background } from './styles'
import { GET_CHAT_AND_VIEWER } from './queries'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import MessageInput from './components/MessageInput'
import MessagesDisplay from './components/MessagesDisplay'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const CHAT_SUBSCRIPTION = gql`
  subscription messageAdded($chatId: ID!, $token: String!) {
    messageAdded(chatId: $chatId, token: $token) {
      id
      sender {
        id
        profilePicture
        firstName
        lastName
      }
      content
    }
  }
`

const MessageInputDisplay = ({ chatId, onPress }) => (
  <View>
    <MessageInput onPress={onPress} chatId={chatId} />
    <KeyboardSpacer />
  </View>
)

class ConversationScreen extends Component {
  render() {
    const { id: chatId } = this.props.navigation.getParam('chat')

    const variables = { chatId }

    const handlePress = () => {
      this.messageDisplay.flatList.scrollToOffset({
        x: 0,
        y: 0,
        animated: true,
      })
    }

    return (
      <Background>
        <Query query={GET_CHAT_AND_VIEWER} variables={variables}>
          {({ data, loading, error, subscribeToMore }) => {
            if (loading) return <Text>loading</Text>
            if (error) return <Text>error</Text>

            const {
              chat,
              viewer: { id: userId },
            } = data
            console.log('data', data)
            return (
              <MessagesDisplay
                ref={el => {
                  this.messageDisplay = el
                }}
                chat={chat}
                userId={userId}
                isGroupMessage={chat.participants.length > 2}
                subscribe={async () => {
                  const token = await AsyncStorage.getItem('token')
                  subscribeToMore({
                    document: CHAT_SUBSCRIPTION,
                    variables: { chatId, token },
                    updateQuery: (oldQuery, { subscriptionData }) => {
                      if (!subscriptionData.data) return oldQuery
                      const message = subscriptionData.data.messageAdded
                      const newQuery = {
                        ...oldQuery,
                        chat: {
                          ...oldQuery.chat,
                          messages: [message, ...oldQuery.chat.messages],
                        },
                      }
                      handlePress()
                      return newQuery
                    },
                  })
                }}
              />
            )
          }}
        </Query>
        <MessageInputDisplay onPress={handlePress} chatId={chatId} />
      </Background>
    )
  }
}

export default ConversationScreen
