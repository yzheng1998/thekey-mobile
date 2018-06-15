import React, { Component } from 'react'
import Tag from './components/Tag'
import { TagList, TagRow } from './styles'

export default class TagLine extends Component {
  render() {
    return (
      <TagList>
        <TagRow>
          {this.props.tagData.map(
            (tag, i) =>
              i < 3 && <Tag tagImage={tag.image} tagText={tag.text} />,
          )}
        </TagRow>
        <TagRow>
          {this.props.tagData.map(
            (tag, i) =>
              i >= 3 &&
              i < 6 && <Tag tagImage={tag.image} tagText={tag.text} />,
          )}
        </TagRow>
      </TagList>
    )
  }
}
