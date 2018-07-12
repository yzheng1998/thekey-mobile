import React, { Component } from 'react'
import { BlockContainer, BackgroundPicture, Picture } from './styles'

export default class PictureHeader extends Component {
  render() {
    return (
      <BlockContainer>
        <BackgroundPicture source={this.props.picture} blurRadius={20}>
          <Picture
            source={this.props.picture}
            avatarSize={this.props.avatarSize}
          />
          {this.props.children}
        </BackgroundPicture>
      </BlockContainer>
    )
  }
}
