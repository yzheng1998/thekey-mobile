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
import _ from 'lodash'
import { buttonRadius } from '../../constants'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showCancel: false,
      animated: props.alwaysShowCancel
        ? new Animated.Value(1)
        : new Animated.Value(0),
    }

    this.delayedOnChangeText = _.debounce(this.onChangeText, 200)

    this.slide = () => {
      const newState = props.alwaysShowCancel ? true : !this.state.showCancel
      this.setState({ showCancel: newState })
      Animated.timing(this.state.animated, {
        toValue: newState ? 1 : 0,
        duration: 200,
      }).start()
    }
  }

  onChangeText = text => {
    this.props.updateText(text)
    this.setState({ showCancel: true })
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
              this.setState({ showCancel: true })
            }}
            onChangeText={this.delayedOnChangeText}
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
            hitSlop={buttonRadius}
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
