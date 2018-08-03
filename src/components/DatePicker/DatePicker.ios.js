import React, { Component } from 'react'
import { DatePickerIOS, View } from 'react-native'
import { DoneButton, DoneButtonText } from './styles'

export default class DatePicker extends Component {
  render() {
    const { doneOnPress, date, setDate, mode, visible } = this.props
    return (
      <View>
        {visible && (
          <View style={{ backgroundColor: 'white' }}>
            <DoneButton onPress={doneOnPress}>
              <DoneButtonText>Done</DoneButtonText>
            </DoneButton>
            <DatePickerIOS mode={mode} date={date} onDateChange={setDate} />
          </View>
        )}
      </View>
    )
  }
}
