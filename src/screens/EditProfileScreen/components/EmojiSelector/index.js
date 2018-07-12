import React, { Component } from 'react'
import { EmojiButton, Emoji } from '../../styles'

export default class EmojiSelector extends Component {
  render() {
    const { emoji, onSelection, selected } = this.props
    return (
      <EmojiButton
        selected={selected.includes(emoji)}
        onPress={() => onSelection(emoji)}
      >
        <Emoji>{emoji}</Emoji>
      </EmojiButton>
    )
  }
}
