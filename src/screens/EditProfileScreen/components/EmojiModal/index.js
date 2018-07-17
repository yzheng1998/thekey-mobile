import React, { Component } from 'react'
import {
  ModalContainer,
  DoneButton,
  DoneButtonText,
  EmojiContainer,
  EmojiWrapper,
} from '../../styles'
import EmojiSelector from '../EmojiSelector'

export default class EmojiModal extends Component {
  render() {
    const { doneOnPress, options, onSelection, selected } = this.props
    return (
      <ModalContainer>
        <DoneButton onPress={doneOnPress}>
          <DoneButtonText>Done</DoneButtonText>
        </DoneButton>
        <EmojiContainer>
          <EmojiWrapper>
            {options.map(emoji => (
              <EmojiSelector
                onSelection={onSelection}
                emoji={emoji}
                key={emoji.label}
                selected={selected}
              />
            ))}
          </EmojiWrapper>
        </EmojiContainer>
      </ModalContainer>
    )
  }
}
