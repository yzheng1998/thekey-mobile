import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { Query } from 'react-apollo'
import { GET_CHATS } from './queries'
import ChatCard from '../../../../components/ChatCard'
import LoadingWrapper from '../../../../components/LoadingWrapper'
import config from '../../../../../config'

class ChatInbox extends Component {
  state = {
    userId: '',
  }

  showParticipantNames = participants => {
    // only show first names in a group chat, first and last otherwise
    if (participants.length > 1) {
      return participants.map(x => x.firstName).join(', ')
    }
    return `${participants[0].firstName} ${participants[0].lastName}`
  }

  render() {
    const { searchText, tab } = this.props
    const variables = {
      chatsFilterInput: {
        participant: searchText,
        connectionsOnly: tab === 1,
        groupsOnly: tab === 2,
      },
      limit: config.chatLimit,
      offset: 0,
    }
    return (
      <Query query={GET_CHATS} variables={variables}>
        {({ loading, data, fetchMore }) => {
          if (loading) return <LoadingWrapper loading />
          return (
            <FlatList
              keyboardShouldPersistTaps="handled"
              keyExtractor={chat => chat.id}
              data={data.viewer.chats.nodes}
              renderItem={({ item: chat }) => {
                const lastMessage =
                  chat.messages.nodes.length && chat.messages.nodes[0]
                return (
                  <ChatCard
                    name={this.showParticipantNames(
                      chat.participants.filter(x => x.id !== data.viewer.id),
                    )}
                    message={lastMessage ? lastMessage.content : ''}
                    profileImage={chat.participants
                      .filter(x => x.id !== data.viewer.id)
                      .map(x => `${x.profilePicture}`)
                      .join(', ')}
                    timeStamp={lastMessage ? lastMessage.createdAt : ''}
                    onPress={() =>
                      this.props.navigation.navigate('Conversation', {
                        chat,
                        viewer: data.viewer,
                      })
                    }
                  />
                )
              }}
              onEndReachedThreshold={0.25}
              onEndReached={() =>
                fetchMore({
                  variables: {
                    ...variables,
                    offset: data.viewer.chats.nodes.length,
                  },
                  updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult) return prev
                    return {
                      ...prev,
                      ...{
                        viewer: {
                          ...prev.viewer,
                          ...{
                            chats: {
                              ...prev.viewer.chats,
                              ...{
                                nodes: [
                                  ...prev.viewer.chats.nodes,
                                  ...fetchMoreResult.viewer.chats.nodes.filter(
                                    n =>
                                      !prev.viewer.chats.nodes.some(
                                        p => p.id === n.id,
                                      ),
                                  ),
                                ],
                                pageInfo: fetchMoreResult.viewer.chats.pageInfo,
                              },
                            },
                          },
                        },
                      },
                    }
                  },
                })
              }
            />
          )
        }}
      </Query>
    )
  }
}

export default ChatInbox
