import React, { Component } from 'react'
import { Background, ScrollScreen, Divider, Container } from './styles'
import { FlatList } from 'react-native'
import ChatMembersHeader from './components/ChatMembersHeader'
import ListItem from './components/ListItem'
import NewChatModal from '../NetworkScreen/components/NewChatModal'

export default class ChatMembersScreen extends Component {
  state = {
    searchText: '',
    newChatModalVisible: false,
  }

  openAddToChatModal = () => {
    this.setState({ newChatModalVisible: true })
  }
  closeAddToChatModal = () => {
    this.setState({ newChatModalVisible: false })
  }

  render() {
    const people = this.props.navigation.getParam('people')
    return (
      <Background>
        <ChatMembersHeader
          navigation={this.props.navigation}
          openAddToChatModal={this.openAddToChatModal}
        />
        <NewChatModal
          navigation={this.props.navigation}
          visible={this.state.newChatModalVisible}
          handleClose={this.closeAddToChatModal}
        />
        <Divider />
        <ScrollScreen>
          <Container>
            <FlatList
              styles={{ backgroundColor: 'red', flex: 1 }}
              keyExtractor={person => person.id}
              data={people}
              renderItem={({ item: person }) => (
                <ListItem
                  name={`${person.firstName} ${person.lastName}`}
                  picture={person.profilePicture}
                  navigate={id =>
                    this.props.navigation.navigate('Member', {
                      id,
                    })
                  }
                  id={person.id}
                />
              )}
            />
          </Container>
        </ScrollScreen>
      </Background>
    )
  }
}
