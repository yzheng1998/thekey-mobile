import React, { Component } from 'react'
import { View, Alert } from 'react-native'
import { RNCamera } from 'react-native-camera'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { NavigationActions, StackActions } from 'react-navigation'

const SEND_FRIEND_REQUEST = gql`
  mutation createFriendRequest($recipientId: ID!, $swipedLeft: Boolean!) {
    createFriendRequest(recipientId: $recipientId, swipedLeft: $swipedLeft) {
      friendRequest {
        id
        sender {
          id
        }
        recipient {
          id
          firstName
          lastName
        }
        status
      }
    }
  }
`
class QRScannerScreen extends Component {
  render() {
    const resetAction = StackActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({ routeName: 'Discover' }),
        NavigationActions.navigate({ routeName: 'Profile' }),
      ],
    })
    return (
      <Mutation
        mutation={SEND_FRIEND_REQUEST}
        onCompleted={() => this.props.navigation.dispatch(resetAction)}
      >
        {(createFriendRequest, { error }) => (
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
            }}
          >
            {error && Alert.alert('Error', 'Could not read QR code')}
            <RNCamera
              barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
              flashMode={RNCamera.Constants.FlashMode.on}
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
              onBarCodeRead={qrCode => {
                const variables = {
                  recipientId: qrCode.data,
                  swipedLeft: false,
                }
                createFriendRequest({ variables })
              }}
              ref={cam => {
                this.camera = cam
              }}
            />
          </View>
        )}
      </Mutation>
    )
  }
}

export default QRScannerScreen
