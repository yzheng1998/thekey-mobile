import React, { Component } from 'react'
import { Keyboard, Animated } from 'react-native'
import {
  SearchBarContainer,
  SearchContainer,
  SearchText,
  SearchIcon,
  ClearIconButton,
  ClearIcon,
  CancelButton,
  CancelText,
  CancelAnimated,
} from './styles'

export default class SearchBar extends Component {
  state = {
    showCancel: false,
    animated: new Animated.Value(0),
  }

  slide() {
    const newState = !this.state.showCancel
    this.setState({ showCancel: newState })
    Animated.timing(this.state.animated, {
      toValue: newState ? 1 : 0,
      duration: 300,
    }).start()
  }

  render() {
    return (
      <SearchBarContainer>
        <SearchContainer
          style={{
            marginRight: this.state.animated.interpolate({
              inputRange: [0, 1],
              outputRange: [-65, 0],
            }),
          }}
        >
          <SearchIcon name="ios-search" size={18} />
          <SearchText
            placeholder={this.props.placeholderText}
            placeholderTextColor="rgb(142, 142, 147)"
            onFocus={() => this.slide()}
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

        <CancelAnimated
          style={{
            transform: [
              {
                translateX: this.state.animated.interpolate({
                  inputRange: [0, 1],
                  outputRange: [65, 0],
                }),
              },
            ],
          }}
        >
          <CancelButton
            onPress={() => {
              Keyboard.dismiss()
              this.props.updateText(null)
              this.slide()
            }}
          >
            <CancelText>Cancel</CancelText>
          </CancelButton>
        </CancelAnimated>
      </SearchBarContainer>
    )
  }
}
