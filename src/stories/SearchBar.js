import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import React, { Component } from 'react'

import SearchBar from '../components/SearchBar'

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
}
const CenteredView = ({ children }) => <View style={style}>{children}</View>

class WrapperWithState extends Component {
  state = {
    text: null,
  }

  updateText = text => {
    this.setState({ text })
  }

  render() {
    return (
      <SearchBar
        updateText={this.updateText}
        state={this.state}
        placeholderText="Search events"
      />
    )
  }
}

storiesOf('CenteredView').add('SearchBar1', () => (
  <CenteredView>
    <WrapperWithState />
  </CenteredView>
))
