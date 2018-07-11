import React, { Component } from 'react'
import {
  PickerContainer,
  PickerView,
  DoneButton,
  DoneButtonText,
} from './styles'

export default class PickerComponent extends Component {
  render() {
    const { options, doneOnPress, onValueChange, value, keyName } = this.props
    return (
      <PickerContainer>
        <DoneButton onPress={doneOnPress}>
          <DoneButtonText>Done</DoneButtonText>
        </DoneButton>
        <PickerView
          selectedValue={value}
          onValueChange={text => onValueChange({ [keyName]: text })}
          itemStyle={{ color: 'rgb(250, 53, 121)' }}
        >
          {options.map(option => (
            <PickerView.Item label={option} value={option} key={option} />
          ))}
        </PickerView>
      </PickerContainer>
    )
  }
}
