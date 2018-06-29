import { AsyncStorage, View } from 'react-native'
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
      }
      content
    }
  }
`

const MessageInputDisplay = ({ chatId }) => (
  <View>
    <MessageInput chatId={chatId} />
    <KeyboardSpacer />
  </View>
)

class ConversationScreen extends Component {
  render() {
    const { id: chatId } = this.props.navigation.getParam('chat')

    const variables = { chatId }

    return (
      <Background>
        <Query query={GET_CHAT_AND_VIEWER} variables={variables}>
          {({ data, loading, error, subscribeToMore }) => {
            if (loading) return 'loading'
            if (error) return 'error'

            const {
              chat,
              viewer: { id: userId },
            } = data
            return (
              <MessagesDisplay
                chat={chat}
                userId={userId}
                subscribe={async () => {
                  const token = await AsyncStorage.getItem('token')
                  subscribeToMore({
                    document: CHAT_SUBSCRIPTION,
                    variables: { chatId, token },
                    updateQuery: (oldQuery, { subscriptionData }) => {
                      console.log('calledupdate')
                      console.log(subscriptionData)
                      if (!subscriptionData.data) return oldQuery
                      const message = subscriptionData.data.messageAdded
                      const newQuery = {
                        ...oldQuery,
                        chat: {
                          ...oldQuery.chat,
                          messages: [...oldQuery.chat.messages, message],
                        },
                      }
                      return newQuery
                    },
                  })
                }}
              />
            )
          }}
        </Query>
        <MessageInputDisplay chatId={chatId} />
      </Background>
    )
  }
}

export default ConversationScreen
