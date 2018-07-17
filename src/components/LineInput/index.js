import React, { Component } from 'react'
import {
  LineInputContainer,
  InputContainer,
  Input,
  ClearIconButton,
} from './styles'
import ClearIcon from 'react-native-vector-icons/MaterialIcons'

export default class LineInput extends Component {
  state = {
    selected: false,
  }
  render() {
    const { updateText, children, placeholderText, text, width } = this.props
    return (
      <LineInputContainer selected={this.state.selected} width={width}>
        <InputContainer>
          {children}
          <Input
            placeholder={placeholderText}
            value={text}
            placeholderTextColor="rgb(139, 133, 150)"
            onChangeText={txt => updateText(txt)}
            onFocus={() => this.setState({ selected: true })}
            onBlur={() => this.setState({ selected: false })}
          />
          {text !== undefined &&
            text !== '' && (
              <ClearIconButton onPress={() => updateText('')}>
                <ClearIcon name="clear" size={20} color="rgb(181, 171, 202)" />
              </ClearIconButton>
            )}
        </InputContainer>
      </LineInputContainer>
    )
  }
}
