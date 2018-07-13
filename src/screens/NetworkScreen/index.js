import React, { Component } from 'react'
import ChatInbox from './components/ChatInbox'
import SearchFilterTab from '../../components/SearchFilterTab'
import SearchBar from '../../components/SearchBar'
import NewChatModal from './components/NewChatModal'
import {
  Background,
  HeaderBackground,
  Title,
  NewChatButton,
  Divider,
} from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons'

class NetworkScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  state = {
    searchText: '',
    newChatModalVisible: false,
  }

  updateText = searchText => {
    this.setState({ searchText })
  }

  handleStartNewChat = () => {
    this.setState({ newChatModalVisible: true })
  }

  handleCloseNewChat = () => {
    this.setState({ newChatModalVisible: false })
  }

  render() {
    const { searchText } = this.state
    return (
      <Background>
        <NewChatModal
          visible={this.state.newChatModalVisible}
          handleClose={this.handleCloseNewChat}
        />
        <HeaderBackground>
          <Title>Your Network</Title>
          <SearchFilterTab
            options={['All', 'Connections', 'Groups', 'Events']}
          />
        </HeaderBackground>
        <SearchBar
          updateText={this.updateText}
          searchText={searchText}
          placeholderText="Search Your Network"
        />
        <Divider />
        <ChatInbox navigation={this.props.navigation} />
        <NewChatButton onPress={this.handleStartNewChat}>
          <Icon name="chat-bubble" size={25} color="white" />
        </NewChatButton>
      </Background>
    )
  }
}

export default NetworkScreen
