import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import React, { Component } from 'react'

import LineInput from '../components/LineInput'
import CustomizedIcon from 'react-native-vector-icons/Feather'

const style = {
  flex: 1,
  paddingLeft: 12,
  paddingRight: 12,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
  flexDirection: 'row',
}
const CenteredView = ({ children }) => <View style={style}>{children}</View>

class WrapperWithState extends Component {
  state = {
    text: '',
  }

  updateText = text => {
    this.setState({ text })
  }

  render() {
    return (
      <LineInput
        updateText={this.updateText}
        text={this.state.text}
        placeholderText="First name"
      >
        <CustomizedIcon name="mail" size={18} color="rgb(139, 133, 150)" />
      </LineInput>
    )
  }
}

storiesOf('CenteredView').add('LineInput', () => (
  <CenteredView>
    <WrapperWithState />
  </CenteredView>
))
