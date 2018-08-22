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
  constructor(props) {
    super(props)
    this.state = {
      showCancel: false,
      animated: props.alwaysShowCancel
        ? new Animated.Value(1)
        : new Animated.Value(0),
    }

    this.slide = () => {
      const newState = props.alwaysShowCancel ? true : !this.state.showCancel
      this.setState({ showCancel: newState })
      Animated.timing(this.state.animated, {
        toValue: newState ? 1 : 0,
        duration: 200,
      }).start()
    }
  }

  render() {
    const {
      updateText,
      searchText,
      placeholderText,
      closeModal,
      ...rest
    } = this.props
    return (
      <SearchBarContainer>
        <SearchContainer
          style={{
            marginRight: this.state.animated.interpolate({
              inputRange: [0, 1],
              outputRange: [-68, 0],
            }),
          }}
        >
          <SearchIcon name="ios-search" size={18} />
          <SearchText
            placeholder={placeholderText}
            placeholderTextColor="rgb(142, 142, 147)"
            onFocus={() => {
              if (!this.state.showCancel) this.slide()
            }}
            onChangeText={text => {
              updateText(text)
              this.setState({ showCancel: true })
            }}
            value={searchText}
            autoCapitalize="none"
            {...rest}
          />
          {searchText !== '' && (
            <ClearIconButton onPress={() => updateText('')}>
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
                  outputRange: [68, 0],
                }),
              },
            ],
          }}
        >
          <CancelButton
            onPress={() => {
              updateText('')
              this.slide()
              Keyboard.dismiss()
              if (closeModal) {
                closeModal()
              }
            }}
          >
            <CancelText>Cancel</CancelText>
          </CancelButton>
        </CancelAnimated>
      </SearchBarContainer>
    )
  }
}
