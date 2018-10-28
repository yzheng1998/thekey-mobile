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
  ThinDivider,
  SafeView,
} from './styles'
import { StatusBar, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

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
        <StatusBar barStyle="dark-content" />
        <Background>
          <NewChatModal
            isExistingChat={false}
            navigation={this.props.navigation}
            visible={this.state.newChatModalVisible}
            handleClose={this.handleCloseNewChat}
          />
          <HeaderBackground>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingRight: 25,
                alignItems: 'center',
              }}
            >
              <Title>Your Network</Title>
            </View>
            <SearchFilterTab
              width="75%"
              updateState={this.changeTab}
              selectedIndex={this.state.tab}
              color="rgb(176, 186, 200)"
              selectedColor="rgb(244, 89, 82)"
              options={['All', 'Connections', 'Groups']}
            />

            <ThinDivider />
          </HeaderBackground>
          <SearchBar
            updateText={this.updateText}
            searchText={searchText}
            placeholderText="Search Your Network"
          />
          <Divider />
          <ChatInbox
            searchText={this.state.searchText}
            tab={this.state.tab}
            navigation={this.props.navigation}
          />
          <NewChatButton onPress={this.handleStartNewChat}>
            <Icon name="chat-bubble" size={25} color="white" />
          </NewChatButton>
        </Background>
      </SafeView>
    )
  }
}

export default NetworkScreen
