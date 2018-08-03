import React, { Component } from 'react'
import {
  PickerContainer,
  PickerView,
  DoneButton,
  DoneButtonText,
} from './styles'

export default class PickerComponent extends Component {
  render() {
    const {
      options,
      doneOnPress,
      onValueChange,
      value,
      keyName,
      validateForm,
    } = this.props
    return (
      <PickerContainer>
        <DoneButton onPress={doneOnPress}>
          <DoneButtonText>Done</DoneButtonText>
        </DoneButton>
        <PickerView
          selectedValue={value}
          onValueChange={text => {
            onValueChange({ [keyName]: text }, () => {
              if (validateForm) validateForm(true)
            })
          }}
          itemStyle={{ color: 'rgb(250, 53, 121)' }}
        >
          {options.map(option => (
            <PickerView.Item
              label={option.label}
              value={option.value}
              key={option}
            />
          ))}
        </PickerView>
      </PickerContainer>
    )
  }
}
