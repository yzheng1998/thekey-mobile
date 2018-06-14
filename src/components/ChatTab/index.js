import React, { Component } from 'react'
import { Tab, Categories } from './styles'

export default class ChatTab extends Component {
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
        <Categories
          isSelected={selectedIndex === 0}
          onPress={() => this.changeIndex(0)}
        >
          All
        </Categories>
        <Categories
          isSelected={selectedIndex === 1}
          onPress={() => this.changeIndex(1)}
        >
          Connections
        </Categories>
        <Categories
          isSelected={selectedIndex === 2}
          onPress={() => this.changeIndex(2)}
        >
          Groups
        </Categories>
        <Categories
          isSelected={selectedIndex === 3}
          onPress={() => this.changeIndex(3)}
        >
          Events
        </Categories>
      </Tab>
    )
  }
}
