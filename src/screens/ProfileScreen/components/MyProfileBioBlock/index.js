import React, { Component } from 'react'
import { BlockContainer, BioText, TextButton } from './styles'
import TagLine from '../../../../components/TagLine'

export default class MyProfile extends Component {
  state = {
    truncated: true,
  }

  changeSize() {
    this.setState({ truncated: !this.state.truncated })
  }

  render() {
    return (
      <BlockContainer>
        <TextButton activeOpacity={0.9} onPress={() => this.changeSize()}>
          <BioText numberOfLines={this.state.truncated ? 3 : 0}>
            {this.props.bioText}
          </BioText>
        </TextButton>
        <TagLine tagData={this.props.tagData} lines={2} />
      </BlockContainer>
    )
  }
}
