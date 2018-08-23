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
import { buttonRadius } from '../../constants'

export default class LineInput extends Component {
  state = {
    selected: false,
  }
  focus = () => {
    this.textInput.focus()
  }

  render() {
    const {
      updateText,
      children,
      placeholderText,
      text,
      onBlur,
      onFocus,
      error,
      ...rest
    } = this.props
    return (
      <RowContainer>
        <LineInputContainer selected={this.state.selected}>
          <InputContainer>
            {children}
            <Input
              innerRef={comp => {
                this.textInput = comp
              }}
              placeholder={placeholderText}
              value={text}
              placeholderTextColor="rgb(139, 133, 150)"
              onChangeText={txt => updateText(txt)}
              onFocus={() => {
                this.setState({ selected: true })
                if (onFocus) onFocus()
              }}
              onBlur={() => {
                this.setState({ selected: false })
                if (onBlur) onBlur()
              }}
              returnKeyType="done"
              {...rest}
            />
            {text !== undefined &&
              text !== '' && (
                <ClearIconButton
                  hitSlop={buttonRadius}
                  onPress={() => updateText('')}
                >
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
