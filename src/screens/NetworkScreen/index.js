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
  InviteButton,
  Divider,
  ThinDivider,
  SafeView,
} from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { ScrollView, StatusBar, View } from 'react-native'
import InviteFriend from './components/InviteFriend'
import DisplayModal from '../../components/DisplayModal'

class NetworkScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  state = {
    searchText: '',
    tab: 0,
    newChatModalVisible: false,
    inviteFriendModalVisible: false,
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

  toggleInviteFriendModal = () => {
    this.setState({
      inviteFriendModalVisible: !this.state.inviteFriendModalVisible,
    })
  }

  render() {
    const { searchText } = this.state
    return (
      <SafeView>
        <StatusBar barStyle="dark-content" />
        <Background>
          <DisplayModal
            onBackPress={this.toggleInviteFriendModal}
            isVisible={this.state.inviteFriendModalVisible}
            title="Invite Friends!"
          >
            <InviteFriend closeModal={this.toggleInviteFriendModal} />
          </DisplayModal>
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
              <InviteButton onPress={this.toggleInviteFriendModal}>
                <Icon name="person-add" size={27} color="rgb(244, 89, 82)" />
              </InviteButton>
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
          <ScrollView keyboardShouldPersistTaps="handled">
            <FriendRequestList />
            <ChatInbox
              searchText={this.state.searchText}
              tab={this.state.tab}
              navigation={this.props.navigation}
            />
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
