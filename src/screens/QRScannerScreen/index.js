import React, { Component } from 'react'
import { Background, Text, SafeView } from './styles'

export default class QRScannerScreen extends Component {
  render() {
    return (
      <SafeView>
        <Background>
          <Text>hi</Text>
        </Background>
      </SafeView>
    )
  }
}
