import React, { Component } from 'react'
import { Tab, Categories } from './styles'

export default class SearchFilterTab extends Component {
  static defaultProps = {
    color: 'black',
    selectedColor: 'black',
    selectedIndex: 0,
  }

  render() {
    const {
      color,
      selectedColor,
      updateState,
      selectedIndex,
      width,
    } = this.props
    return (
      <Tab width={width}>
        {this.props.options.map((option, idx) => (
          <Categories
            key={option}
            isSelected={selectedIndex === idx}
            onPress={() => {
              updateState(idx)
            }}
            color={color}
            selectedColor={selectedColor}
          >
            {option}
          </Categories>
        ))}
      </Tab>
    )
  }
}
