import React, { Component } from 'react'
import ChatInbox from './components/ChatInbox'
import SearchFilterTab from '../../components/SearchFilterTab'
import SearchBar from '../../components/SearchBar'
import NewChatModal from './components/NewChatModal'
import ConnectionCard from './components/ConnectionCard'
import {
  Background,
  HeaderBackground,
  Title,
  NewChatButton,
  Divider,
  ThinDivider,
} from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Text, View, ScrollView } from 'react-native'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const GET_FRIEND_REQUESTS = gql`
  query viewer {
    viewer {
      friendRequests {
        id
        sender {
          id
          firstName
          lastName
          profilePicture
        }
        recipient {
          id
        }
        status
      }
    }
  }
`

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
      <Background>
        <NewChatModal
          visible={this.state.newChatModalVisible}
          handleClose={this.handleCloseNewChat}
        />
        <HeaderBackground>
          <Title>Your Network</Title>
          <SearchFilterTab
            updateState={this.changeTab}
            selectedIndex={this.state.tab}
            color="white"
            selectedColor="white"
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
          <Query query={GET_FRIEND_REQUESTS}>
            {({ loading, error, data }) => {
              if (loading) return <Text>`Loading...`</Text>
              if (error) return <Text>`Error! ${error.message}`</Text>
              return (
                <View>
                  {data.viewer.friendRequests.map(friendRequest => (
                    <ConnectionCard
                      id={friendRequest.id}
                      name={`${friendRequest.sender.firstName} ${
                        friendRequest.sender.lastName
                      }`}
                      timeStamp="2018-07-19 23:29:09.592-04"
                      picture={friendRequest.sender.profilePicture}
                    />
                  ))}
                </View>
              )
            }}
          </Query>
          <Divider />
          <ChatInbox navigation={this.props.navigation} />
        </ScrollView>
        <NewChatButton onPress={this.handleStartNewChat}>
          <Icon name="chat-bubble" size={25} color="white" />
        </NewChatButton>
      </Background>
    )
  }
}

export default NetworkScreen
