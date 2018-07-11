import React, { Component } from 'react'
import { Tab, Categories } from './styles'

export default class SearchFilterTab extends Component {
  static defaultProps = {
    color: 'black',
    selectedColor: 'black',
  }
  constructor(props) {
    super(props)
    this.state = { selectedIndex: 0 }
  }
  changeIndex(idx) {
    this.setState({ selectedIndex: idx })
  }

  render() {
    const { selectedIndex } = this.state
    const { color, selectedColor, updateState } = this.props
    
    return (
      <Tab>
        {this.props.options.map((option, idx) => (
          <Categories
            key={option}
            isSelected={selectedIndex === idx}
            onPress={() => {
              this.changeIndex(idx)
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
