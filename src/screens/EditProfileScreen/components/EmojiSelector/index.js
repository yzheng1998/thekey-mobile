import React, { Component } from 'react'
import { EmojiButton, Emoji } from '../../styles'
import nodeEmoji from 'node-emoji'

export default class EmojiSelector extends Component {
  render() {
    const { emoji, onSelection, selected } = this.props
    return (
      <EmojiButton
        selected={selected.map(obj => obj.wayToMeet).includes(emoji.value)}
        onPress={() => onSelection(emoji)}
      >
        <Emoji>{nodeEmoji.get(emoji.wayToMeet.toLowerCase())}</Emoji>
      </EmojiButton>
    )
  }
}
