import React, { Component } from 'react'
import {
  SearchBarContainer,
  SearchContainer,
  SearchText,
  SearchIcon,
  ClearIconButton,
  ClearIcon,
  CancelButton,
  CancelText,
} from './styles'

export default class SearchBar extends Component {
  state = {
    showCancel: false,
  }
  render() {
    return (
      <SearchBarContainer>
        <SearchContainer>
          <SearchIcon name="ios-search" size={18} />
          <SearchText
            placeholder={this.props.placeholderText}
            placeholderTextColor="rgb(142, 142, 147)"
            onFocus={() => this.setState({ showCancel: true })}
            onChangeText={text => {
              this.props.updateText(text)
              this.setState({ showCancel: true })
            }}
            value={this.props.state.text}
          />
          {this.props.state.text && (
            <ClearIconButton onPress={() => this.props.updateText(null)}>
              <ClearIcon name="ios-close-circle" size={18} />
            </ClearIconButton>
          )}
        </SearchContainer>

        {this.state.showCancel && (
          <CancelButton
            onPress={() => {
              dismissKeyboard()
              this.props.updateText(null)
              this.setState({ showCancel: false })
            }}
          >
            <CancelText>Cancel</CancelText>
          </CancelButton>
        )}
      </SearchBarContainer>
    )
  }
}
