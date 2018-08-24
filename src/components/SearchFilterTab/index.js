import React, { Component } from 'react'
import { Tab, Categories, CategoryButton } from './styles'
import { wordRadius } from '../../constants'

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
          <CategoryButton
            key={option}
            hitSlop={wordRadius}
            onPress={() => {
              updateState(idx)
            }}
          >
            <Categories
              isSelected={selectedIndex === idx}
              color={color}
              selectedColor={selectedColor}
            >
              {option}
            </Categories>
          </CategoryButton>
        ))}
      </Tab>
    )
  }
}
