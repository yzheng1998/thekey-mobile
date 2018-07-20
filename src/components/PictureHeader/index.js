import React, { Component } from 'react'
import { BlockContainer, BackgroundPicture, Picture } from './styles'

export default class PictureHeader extends Component {
  render() {
    const { picture } = this.props
    const displayPicture = picture
      ? { uri: picture }
      : {
          uri:
            'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a015de4c5a8a5e7be8e88ee39fb1ce2e&auto=format&fit=crop&w=1500&q=80',
        }
    return (
      <BlockContainer>
        <BackgroundPicture source={displayPicture} blurRadius={20}>
          <Picture source={displayPicture} avatarSize={this.props.avatarSize} />

          {this.props.children}
        </BackgroundPicture>
      </BlockContainer>
    )
  }
}
