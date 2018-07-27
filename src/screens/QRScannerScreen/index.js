import React, { Component } from 'react'
import { View } from 'react-native'
import { RNCamera } from 'react-native-camera'

class QRScannerScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}
      >
        <RNCamera
          barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
          flashMode={RNCamera.Constants.FlashMode.on}
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
          onBarCodeRead={qrCode => {
            this.props.sendFriendRequest(qrCode.data)
          }}
          ref={cam => {
            this.camera = cam
          }}
        />
      </View>
    )
  }
}

export default QRScannerScreen

