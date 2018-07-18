import React, { Component } from 'react'
import ChatInbox from './components/ChatInbox'
import SearchFilterTab from '../../components/SearchFilterTab'
import SearchBar from '../../components/SearchBar'
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
    tab: 0,
  }

  updateText = searchText => {
    this.setState({ searchText })
  }

  changeTab = tab => {
    this.setState({ tab })
  }

  render() {
    const { searchText } = this.state
    return (
      <Background>
        <HeaderBackground>
          <Title>Your Network</Title>
          <SearchFilterTab
            updateState={this.changeTab}
            selectedIndex={this.state.tab}
            color="white"
            selectedColor="white"
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
        <NewChatButton>
          <Icon name="chat-bubble" size={25} color="white" />
        </NewChatButton>
      </Background>
    )
  }
}

export default NetworkScreen
