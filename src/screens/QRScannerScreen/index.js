import React, { Component } from 'react'
import { Background, Text, SafeView } from './styles'

export default class QRScannerScreen extends Component {
  render() {
    const { currentUserId } = this.props
    return (
      <SafeView>
        <Background>
          <Text>hi</Text>
        </Background>
      </SafeView>
    )
  }
}
