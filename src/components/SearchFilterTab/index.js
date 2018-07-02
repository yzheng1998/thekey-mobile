import React, { Component } from 'react'
import { Tab, Categories } from './styles'

export default class SearchFilterTab extends Component {
  state = { selectedIndex: 0 }

  changeIndex(idx) {
    this.setState({ selectedIndex: idx })
  }

  render() {
    const { selectedIndex } = this.state
    const { updateState } = this.props
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
          >
            {option}
          </Categories>
        ))}
      </Tab>
    )
  }
}
