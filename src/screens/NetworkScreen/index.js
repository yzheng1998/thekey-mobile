import React, { Component } from 'react'
import ChatInbox from './components/ChatInbox'
import SearchFilterTab from '../../components/SearchFilterTab'
import SearchBar from '../../components/SearchBar'
import NewChatModal from './components/NewChatModal'
import FriendRequestList from './components/FriendRequestList'
import {
  Background,
  HeaderBackground,
  Title,
  NewChatButton,
  Divider,
  ThinDivider,
  SafeView,
} from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { ScrollView } from 'react-native'

class NetworkScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  state = {
    searchText: '',
    tab: 0,
    newChatModalVisible: false,
  }

  updateText = searchText => {
    this.setState({ searchText })
  }

  changeTab = tab => {
    this.setState({ tab })
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
      <SafeView>
        <Background>
          <NewChatModal
            navigation={this.props.navigation}
            visible={this.state.newChatModalVisible}
            handleClose={this.handleCloseNewChat}
          />
          <HeaderBackground>
            <Title>Your Network</Title>
            <SearchFilterTab
              updateState={this.changeTab}
              selectedIndex={this.state.tab}
              color="rgb(176, 186, 200)"
              selectedColor="rgb(250, 53, 121)"
              options={['All', 'Connections', 'Groups', 'Events']}
            />
            <ThinDivider />
          </HeaderBackground>
          <SearchBar
            updateText={this.updateText}
            searchText={searchText}
            placeholderText="Search Your Network"
          />
          <Divider />
          <ScrollView>
            <FriendRequestList />
            <ChatInbox navigation={this.props.navigation} />
          </ScrollView>
          <NewChatButton onPress={this.handleStartNewChat}>
            <Icon name="chat-bubble" size={25} color="white" />
          </NewChatButton>
        </Background>
      </SafeView>
    )
  }
}

export default NetworkScreen
