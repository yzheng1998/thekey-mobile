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
import { Text } from 'react-native'

export default class EmojiModal extends Component {
  render() {
    const { doneOnPress, options, onSelection, selected } = this.props
    console.log('selected', selected)
    return (
      <ModalContainer>
        <DoneButton onPress={doneOnPress}>
          <DoneButtonText>Done</DoneButtonText>
        </DoneButton>
        <EmojiContainer>
          <Query query={GET_WAYS_TO_MEET}>
            {({ loading, error, data, refetch }) => {
              if (loading) return <Text>Loading...</Text>
              if (error) return <Text>Error! ${error.message}</Text>
              console.log('data', data)
              return (
                <EmojiWrapper>
                  {data.waysToMeet.map(emoji => (
                    <EmojiSelector
                      onSelection={onSelection}
                      emoji={emoji}
                      key={emoji.label}
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
