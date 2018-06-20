import React, { Component } from 'react'
import Tag from './components/Tag'
import { TagList } from './styles'

export default class TagLine extends Component {
  render() {
    return (
      <TagList height={this.props.lines * 42.5}>
        {this.props.tagData.map(tag => (
          <Tag tagImage={tag.image} tagText={tag.name} key={tag.name} />
        ))}
      </TagList>
    )
  }
}
