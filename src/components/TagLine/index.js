import React, { Component } from 'react'
import Tag from './components/Tag'
import { TagList } from './styles'
import hands from './hands.jpg'

export default class TagLine extends Component {
  static defaultProps = {
    maxNumberOfLines: 2,
  }
  render() {
    const { tagData, maxNumberOfLines } = this.props
    return (
      <TagList maxLines={maxNumberOfLines}>
        {tagData.map(tag => (
          <Tag tagImage={hands} tagText={tag.name} key={tag.name} />
        ))}
      </TagList>
    )
  }
}
