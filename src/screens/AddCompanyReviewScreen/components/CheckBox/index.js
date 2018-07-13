import React, { Component } from 'react'
import { CheckButton, CheckBoxContainer } from './styles'

export default class CheckBox extends Component {
  render() {
    const { isCurrentEmployee, handleCheckBox } = this.props
    return (
      <CheckBoxContainer>
        <CheckButton
          activeOpacity={1}
          left
          iconRight
          title="Current Employee"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={isCurrentEmployee}
          onIconPress={() => {
            handleCheckBox(isCurrentEmployee)
          }}
          textStyle={{
            flex: 1,
            fontSize: 16,
            color: 'black',
            justifyContent: 'space-between',
            marginLeft: -10,
            fontWeight: 'bold',
          }}
          containerStyle={{
            backgroundColor: 'white',
            borderWidth: 0,
            width: '100%',
          }}
          checkedColor="rgb(250, 53, 121)"
        />
      </CheckBoxContainer>
    )
  }
}
