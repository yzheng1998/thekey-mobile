import React, { Component } from 'react'
import { TagContainer, TagText, TagImage, TagOverlay } from './styles'

export default class Tag extends Component {
  render() {
    return (
      <TagContainer>
        <TagImage source={this.props.tagImage}>
          <TagOverlay>
            <TagText>{this.props.tagText}</TagText>
          </TagOverlay>
        </TagImage>
      </TagContainer>
    )
  }
}
