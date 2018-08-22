import React, { Component } from 'react'
import {
  ModalContainer,
  DoneButton,
  DoneButtonText,
  EmojiContainer,
  EmojiWrapper,
} from '../../styles'
import EmojiSelector from '../EmojiSelector'
import { Query } from 'react-apollo'
import { GET_WAYS_TO_MEET } from '../../query'
import LoadingWrapper from '../../../../components/LoadingWrapper'
import { buttonRadius } from '../../../../constants'

export default class EmojiModal extends Component {
  render() {
    const { doneOnPress, onSelection, selected } = this.props
    return (
      <ModalContainer>
        <DoneButton onPress={doneOnPress} hitSlop={buttonRadius}>
          <DoneButtonText>Done</DoneButtonText>
        </DoneButton>
        <EmojiContainer>
          <Query query={GET_WAYS_TO_MEET}>
            {({ loading, data }) => {
              if (loading) return <LoadingWrapper loading />
              return (
                <EmojiWrapper>
                  {data.waysToMeet.map(emoji => (
                    <EmojiSelector
                      onSelection={onSelection}
                      emoji={emoji}
                      key={emoji.id}
                      selected={selected}
                    />
                  ))}
                </EmojiWrapper>
              )
            }}
          </Query>
        </EmojiContainer>
      </ModalContainer>
    )
  }
}
