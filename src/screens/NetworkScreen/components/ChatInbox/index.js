import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import ChatCard from '../../../../components/ChatCard'
import placeholderAvatar from '../../../../../assets/Jon.jpg'

const GET_CHATS = gql`
  query viewer {
    viewer {
      id
      firstName
      lastName
      email
      chats {
        id
        participants {
          id
          firstName
          lastName
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
        }
      }
    }
  }
`

class ChatInbox extends Component {
  state = {
    userId: '',
  }

  render() {
    return (
      <Query query={GET_CHATS}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...'
          if (error) return `Error! ${error.message}`
          return (
            <FlatList
              keyExtractor={chat => chat.id}
              data={data.viewer.chats}
              renderItem={({ item: chat }) => (
                <ChatCard
                  name={chat.participants
                    .filter(x => x.id !== data.viewer.id)
                    .map(x => x.firstName)
                    .join(', ')}
                  message={
                    chat.messages.length
                      ? chat.messages[chat.messages.length - 1].content
                      : ''
                  }
                  profileImage={placeholderAvatar}
                  timeStamp="2018-06-18 10:52:03.744-04"
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
