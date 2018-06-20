import React, { Component } from 'react'
import { Tab, Categories } from './styles'

export default class SearchFilterTab extends Component {
  constructor(props) {
    super(props)
    this.state = { selectedIndex: 0 }
  }

  changeIndex(idx) {
    this.setState({ selectedIndex: idx })
  }

  render() {
    const { selectedIndex } = this.state
    return (
      <Tab>
        {this.props.options.map((option, idx) => (
          <Categories
            isSelected={selectedIndex === idx}
            onPress={() => this.changeIndex(idx)}
          >
            {option}
          </Categories>
        ))}
      </Tab>
    )
  }
}
