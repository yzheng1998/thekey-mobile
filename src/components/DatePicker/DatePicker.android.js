import React, { Component } from 'react'
import { View } from 'react-native'
import { DoneButton, DoneButtonText } from './styles'

export default class DatePicker extends Component {
  render() {
    const { doneOnPress, visible } = this.props
    return (
      <View>
        {visible && (
          <View style={{ backgroundColor: 'white' }}>
            <DoneButton onPress={doneOnPress}>
              <DoneButtonText>Done</DoneButtonText>
            </DoneButton>
          </View>
        )}
      </View>
    )
  }
}
