import React, { Component } from 'react'
import QRCode from 'react-native-qrcode-svg'

export default class QRCodeGenerator extends Component {
  render() {
    const { size, id } = this.props
    return <QRCode value={id} size={size} />
  }
}
