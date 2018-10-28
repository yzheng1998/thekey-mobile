import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { Query } from 'react-apollo'
import { GET_CHATS } from './queries'
import ChatCard from '../../../../components/ChatCard'
import LoadingWrapper from '../../../../components/LoadingWrapper'
import FriendRequestList from '../FriendRequestList'
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
      <Query query={GET_CHATS} variables={variables} pollInterval={5000}>
        {({ loading, data, fetchMore }) => {
          if (loading) return <LoadingWrapper loading />
          return (
            <FlatList
              keyboardShouldPersistTaps="handled"
              ListHeaderComponent={
                <FriendRequestList navigation={this.props.navigation} />
              }
              keyExtractor={chat => chat.id}
              data={data.viewer.chats.nodes}
              renderItem={({ item: chat }) => {
                const lastMessage = chat.messages.nodes.length
                  ? chat.messages.nodes[0]
                  : { content: '', createdAt: '' }
                return (
                  <ChatCard
                    name={this.showParticipantNames(
                      chat.participants.filter(x => x.id !== data.viewer.id),
                    )}
                    message={lastMessage.content}
                    profileImage={chat.participants
                      .filter(x => x.id !== data.viewer.id)
                      .map(x => `${x.profilePicture}`)
                      .join(', ')}
                    timeStamp={lastMessage.createdAt}
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
                    const { chats: prevChats } = prev.viewer
                    const { chats: fetchChats } = fetchMoreResult.viewer

                    // Make sure that there are no repeat nodes
                    const newNodes = [
                      ...prevChats.nodes,
                      ...fetchChats.nodes.filter(
                        n => !prevChats.nodes.some(p => p.id === n.id),
                      ),
                    ]

                    const newChats = {
                      ...prevChats,
                      ...{
                        nodes: newNodes,
                        pageInfo: fetchChats.pageInfo,
                      },
                    }

                    const newViewer = {
                      ...prev.viewer,
                      ...{
                        chats: newChats,
                      },
                    }

                    const newQuery = {
                      ...prev,
                      ...{
                        viewer: newViewer,
                      },
                    }
                    return newQuery
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
