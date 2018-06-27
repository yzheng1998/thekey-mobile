import React, { Component } from 'react'
import {
  SearchBarContainer,
  SearchContainer,
  SearchText,
  SearchIcon,
  CancelButton,
  CancelText,
} from './styles'

export default class SearchBar extends Component {
  render() {
    return (
      <SearchBarContainer>
        <SearchContainer>
          <SearchIcon name="ios-search" size={18} />
          <SearchText
            placeholder={this.props.placeholderText}
            placeholderTextColor="rgb(142, 142, 147)"
            onChangeText={text => {
              this.props.updateText(text)
            }}
            value={this.props.state.text}
          />
        </SearchContainer>

        {this.props.state.text && (
          <CancelButton onPress={() => this.props.updateText(null)}>
            <CancelText>Cancel</CancelText>
          </CancelButton>
        )}
      </SearchBarContainer>
    )
  }
}
