import React, { Component } from 'react'
import Tag from './components/Tag'
import { TagList } from './styles'
import hands from './hands.jpg'

export default class TagLine extends Component {
  render() {
    return (
      <TagList height={this.props.lines * 42.5}>
        {this.props.tagData.map(tag => (
          <Tag tagImage={hands} tagText={tag.name} key={tag.name} />
        ))}
      </TagList>
    )
  }
}
