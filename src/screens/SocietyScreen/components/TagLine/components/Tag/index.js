import React, { Component } from 'react'
import { TagContainer, TagText, TagImage } from './styles'

export default class Tag extends Component {
  render() {
    return (
      <TagContainer>
        <TagImage source={this.props.tagImage}>
          <TagText>{this.props.tagText}</TagText>
        </TagImage>
      </TagContainer>
    )
  }
}
