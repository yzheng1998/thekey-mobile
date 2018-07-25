import React, { Component } from 'react'
import { FlatList, Text } from 'react-native'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import ChatCard from '../../../../components/ChatCard'

const GET_CHATS = gql`
  query viewer {
    viewer {
      ... on User {
        id
        firstName
        lastName
        profilePicture
        email
        chats {
          id
          participants {
            id
            firstName
            lastName
            profilePicture
          }
          messages {
            id
            sender {
              id
              firstName
              lastName
            }
            content
            chat {
              messages {
                content
              }
            }
            createdAt
          }
        }
      }
    }
  }
`

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
    return (
      <Query query={GET_CHATS} pollInterval={5000}>
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading...</Text>
          if (error) return <Text>Error! ${error.message}</Text>
          return (
            <FlatList
              keyExtractor={chat => chat.id}
              data={data.viewer.chats}
              renderItem={({ item: chat }) => (
                <ChatCard
                  name={this.showParticipantNames(
                    chat.participants.filter(x => x.id !== data.viewer.id),
                  )}
                  message={
                    chat.messages.length
                      ? chat.messages[chat.messages.length - 1].content
                      : ''
                  }
                  profileImage={chat.participants
                    .filter(x => x.id !== data.viewer.id)
                    .map(x => `${x.profilePicture}`)
                    .join(', ')}
                  timeStamp={
                    chat.messages.length
                      ? chat.messages[chat.messages.length - 1].createdAt
                      : '2018-07-19 23:29:09.592-04'
                  }
                  onPress={() =>
                    this.props.navigation.navigate('Conversation', {
                      chat,
                      viewer: data.viewer,
                    })
                  }
                />
              )}
            />
          )
        }}
      </Query>
    )
  }
}

export default ChatInbox
