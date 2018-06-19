import React, { Component } from 'react'
import { View } from 'react-native'
import ChatInbox from './components/ChatInbox'

class NetworkScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Your Network',
  }

  render() {
    return (
      <View>
        <ChatInbox navigation={this.props.navigation} />
      </View>
    )
  }
}

export default NetworkScreen
