import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import React, { Component } from 'react'
import EditContactBlock from '../screens/EditProfileScreen/components/EditContactBlock'

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
}
const CenteredView = ({ children }) => <View style={style}>{children}</View>

class WrapperWithState extends Component {
  state = {
    linkedIn: 'Linkedin.com/name',
    twitter: '@username',
    facebook: 'facebook.com/name',
    email: 'person@email.com',
  }

  updateText = (key, text) => {
    this.setState({ [key]: text })
  }

  render() {
    return (
      <EditContactBlock
        linkedIn={this.state.linkedIn}
        email={this.state.email}
        facebook={this.state.facebook}
        twitter={this.state.twitter}
        onChangeText={this.updateText}
      />
    )
  }
}

storiesOf('CenteredView').add('EditContactBlock1', () => (
  <CenteredView>
    <WrapperWithState />
  </CenteredView>
))
