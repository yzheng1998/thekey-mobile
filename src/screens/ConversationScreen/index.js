import { AsyncStorage, View } from 'react-native'
import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Background } from './styles'
import { GET_CHAT_AND_VIEWER } from './queries'
import LoadingWrapper from '../../components/LoadingWrapper'
import KeyboardSpacer from '../../components/KeyboardSpacer'
import MessageInput from './components/MessageInput'
import MessagesDisplay from './components/MessagesDisplay'
import ConversationHeader from './components/ConversationHeader'
import config from '../../../config'

const CHAT_SUBSCRIPTION = gql`
  subscription messageAdded($chatId: ID!, $token: String!) {
    messageAdded(chatId: $chatId, token: $token) {
      id
      sender {
        id
        firstName
        lastName
        profilePicture
      }
      content
    }
  }
`

const MessageInputDisplay = ({
  chatId,
  onPress,
  offset,
  limit,
  onSendMessage,
}) => (
  <View style={{ marginTop: 6 }}>
    <MessageInput
      onPress={onPress}
      chatId={chatId}
      offset={offset}
      limit={limit}
      onSendMessage={onSendMessage}
    />
    <KeyboardSpacer />
  </View>
)

class ConversationScreen extends Component {
  constructor(props) {
    super(props)
    this.flatListRef = React.createRef()
  }

  render() {
    const { id: chatId } = this.props.navigation.getParam('chat')

    const variables = {
      chatId,
      offset: 0,
      limit: config.messageLimit,
    }

    const handlePress = () => {
      this.flatListRef.current.scrollToOffset({
        x: 0,
        y: 0,
        animated: true,
      })
    }

    return (
      <Background>
        <Query query={GET_CHAT_AND_VIEWER} variables={variables}>
          {({ data, loading, subscribeToMore, refetch, fetchMore }) => {
            if (loading) return <LoadingWrapper loading />
            const {
              chat,
              viewer: { id: userId },
            } = data

            return (
              <View style={{ flex: 1 }}>
                <ConversationHeader
                  navigation={this.props.navigation}
                  participants={chat.participants}
                  userId={userId}
                  chatId={chatId}
                />
                <MessagesDisplay
                  refreshData={refetch}
                  chat={chat}
                  userId={userId}
                  flatListRef={this.flatListRef}
                  isGroupMessage={chat.participants.length > 2}
                  subscribe={async () => {
                    const token = await AsyncStorage.getItem('token')
                    subscribeToMore({
                      document: CHAT_SUBSCRIPTION,
                      variables: { chatId, token },
                      updateQuery: (oldQuery, { subscriptionData }) => {
                        if (!subscriptionData.data) return oldQuery
                        const message = subscriptionData.data.messageAdded
                        const { messages: oldMessages } = oldQuery.chat
                        const { pageInfo: oldPageInfo } = oldQuery.chat.messages

                        const newNodes = [message, ...oldMessages.nodes]

                        const newPageInfo = {
                          ...oldPageInfo,
                          offset: oldPageInfo.offset + 1,
                          limit: oldPageInfo.limit,
                        }

                        const newMessages = {
                          ...oldMessages,
                          ...{
                            nodes: newNodes,
                            pageInfo: newPageInfo,
                          },
                        }

                        const newChat = {
                          ...oldQuery.chat,
                          ...{
                            messages: newMessages,
                          },
                        }

                        const newQuery = {
                          ...oldQuery,
                          ...{
                            chat: newChat,
                          },
                        }

                        handlePress()
                        return newQuery
                      },
                    })
                  }}
                  onRefresh={async () =>
                    fetchMore({
                      variables: {
                        ...variables,
                        offset: data.chat.messages.nodes.length,
                      },
                      updateQuery: (prev, { fetchMoreResult }) => {
                        if (!fetchMoreResult) return prev

                        const { messages: prevMessages } = prev.chat
                        const { messages: fetchMessages } = fetchMoreResult.chat

                        // Make sure that there are no repeat nodes
                        const newNodes = [
                          ...prevMessages.nodes,
                          ...fetchMessages.nodes.filter(
                            n => !prevMessages.nodes.some(p => p.id === n.id),
                          ),
                        ]

                        const newMessages = {
                          ...prevMessages,
                          ...{
                            nodes: newNodes,
                            pageInfo: fetchMessages.pageInfo,
                            totalCount: fetchMessages.totalCount,
                          },
                        }

                        const newChat = {
                          ...prev.chat,
                          ...{
                            messages: newMessages,
                          },
                        }

                        const newQuery = {
                          ...prev,
                          ...{
                            chat: newChat,
                          },
                        }

                        return newQuery
                      },
                    })
                  }
                />
                <MessageInputDisplay
                  onPress={handlePress}
                  chatId={chatId}
                  offset={0}
                  limit={data.chat.messages.nodes.length}
                  onSendMessage={message => {
                    fetchMore({
                      variables: {
                        ...variables,
                        offset: data.chat.messages.nodes.length + 1,
                      },
                      updateQuery: (prev, { fetchMoreResult }) => {
                        if (!fetchMoreResult) return prev

                        const { messages: prevMessages } = prev.chat
                        const { pageInfo: prevPageInfo } = prevMessages

                        // Make sure that there are no repeat nodes
                        const newNodes = [message, ...prevMessages.nodes]

                        const newPageInfo = {
                          ...prevPageInfo,
                          offset: prevPageInfo.offset + 1,
                          limit: prevPageInfo.limit,
                        }

                        const newMessages = {
                          ...prevMessages,
                          ...{
                            nodes: newNodes,
                            pageInfo: newPageInfo,
                          },
                        }

                        const newChat = {
                          ...prev.chat,
                          ...{
                            messages: newMessages,
                          },
                        }

                        const newQuery = {
                          ...prev,
                          ...{
                            chat: newChat,
                          },
                        }

                        return newQuery
                      },
                    })
                  }}
                />
              </View>
            )
          }}
        </Query>
      </Background>
    )
  }
}

export default ConversationScreen
