import React, { Component } from 'react'
import Tag from './components/Tag'
import { TagList } from './styles'

export default class TagLine extends Component {
  render() {
    return (
      <TagList style={{ height: this.props.lines * 42.5 }}>
        {this.props.tagData.map(
          (tag, i) =>
            i < 10 && (
              <Tag tagImage={tag.image} tagText={tag.text} key={tag.text} />
            ),
        )}
      </TagList>
    )
  }
}
