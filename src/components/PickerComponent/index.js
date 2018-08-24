import React, { Component } from 'react'
import {
  PickerContainer,
  PickerView,
  DoneButton,
  DoneButtonText,
} from './styles'
import { Platform, View } from 'react-native'
import ActionSheet from 'react-native-actionsheet'

export default class PickerComponent extends Component {
  showActionSheet = () => {
    if (Platform.OS === 'android') this.ActionSheet.show()
  }
  render() {
    const {
      visible,
      options,
      doneOnPress,
      onValueChange,
      value,
      keyName,
      validateForm,
    } = this.props
    return Platform.OS === 'ios' ? (
      <View>
        {visible && (
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
              itemStyle={{ color: 'rgb(244, 89, 82)' }}
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
        )}
      </View>
    ) : (
      <ActionSheet
        ref={o => {
          this.ActionSheet = o
        }}
        options={options.map(option => option.label)}
        onPress={index => {
          onValueChange({ [keyName]: options[index].value }, () => {
            if (validateForm) validateForm(true)
          })
          doneOnPress()
        }}
      />
    )
  }
}
