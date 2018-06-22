import React, { Component } from 'react'
import { InputBox, Container } from './styles'
import SendButton from '../SendButton'

export default class MessageInput extends Component {
  state = {
    content: '',
  }

  clearMessage = () => {
    this.setState({ content: '' })
  }

  render() {
    return (
      <Container>
        <InputBox
          multiline
          placeholder="Message"
          value={this.state.content}
          autoGrow={false}
          onChangeText={content => {
            this.setState({ content })
          }}
        />
        <SendButton
          chatId={this.props.chatId}
          content={this.state.content}
          clearMessage={this.clearMessage}
        />
      </Container>
    )
  }
}
