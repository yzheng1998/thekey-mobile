import React, { Component } from 'react'
import { ListItem } from 'react-native-elements'
import { FlatList } from 'react-native'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

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
                <ListItem
                  title={chat.participants
                    .filter(x => x.id !== data.viewer.id)
                    .map(x => x.firstName)
                    .join(', ')}
                  subtitle={chat.messages[chat.messages.length - 1].content}
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
