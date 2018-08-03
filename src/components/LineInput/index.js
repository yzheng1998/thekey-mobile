import React, { Component } from 'react'
import {
  RowContainer,
  LineInputContainer,
  InputContainer,
  Input,
  ClearIconButton,
} from './styles'
import ClearIcon from 'react-native-vector-icons/MaterialIcons'
import Error from '../../components/Error'

export default class LineInput extends Component {
  static defaultProps = {
    staticBorder: false,
  }
  state = {
    selected: false,
  }
  render() {
    const {
      updateText,
      children,
      placeholderText,
      placeholderTextColor,
      text,
      onBlur,
      error,
      staticBorder,
      ...rest
    } = this.props
    return (
      <RowContainer>
        <LineInputContainer
          staticBorder={staticBorder}
          selected={this.state.selected}
        >
          <InputContainer>
            {children}
            <Input
              placeholder={placeholderText}
              value={text}
              placeholderTextColor={
                placeholderTextColor || 'rgb(139, 133, 150)'
              }
              onChangeText={txt => updateText(txt)}
              onFocus={() => this.setState({ selected: true })}
              onBlur={() => {
                this.setState({ selected: false })
                if (onBlur) onBlur()
              }}
              returnKeyType="done"
              {...rest}
            />
            {text !== undefined &&
              text !== '' && (
                <ClearIconButton onPress={() => updateText('')}>
                  <ClearIcon
                    name="clear"
                    size={17}
                    color="rgb(181, 171, 202)"
                  />
                </ClearIconButton>
              )}
          </InputContainer>
        </LineInputContainer>
        <Error error={error} />
      </RowContainer>
    )
  }
}
