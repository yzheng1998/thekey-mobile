import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import React, { Component } from 'react'
import HorizontalEditField from '../screens/EditProfileScreen/components/HorizontalEditField'

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
}
const CenteredView = ({ children }) => <View style={style}>{children}</View>

class WrapperWithState extends Component {
  state = {
    name: 'Yuke Zheng',
  }

  updateText = (key, text) => {
    this.setState({ [key]: text })
  }

  render() {
    return (
      <HorizontalEditField
        title="Name"
        onChangeText={text => this.updateText('name', text)}
        value={this.state.name}
      />
    )
  }
}

storiesOf('CenteredView').add('HorizontalDescription1', () => (
  <CenteredView>
    <WrapperWithState />
  </CenteredView>
))
