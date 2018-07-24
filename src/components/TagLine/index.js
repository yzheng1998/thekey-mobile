import React, { Component } from 'react'
import Tag from './components/Tag'
import { TagList } from './styles'
import hands from './hands.jpg'

export default class TagLine extends Component {
  render() {
    const { tagData, lines } = this.props
    return (
      <TagList height={!Number.isNaN(lines) ? lines * 42.5 : null}>
        {tagData.map(tag => (
          <Tag tagImage={hands} tagText={tag.name} key={tag.name} />
        ))}
      </TagList>
    )
  }
}
