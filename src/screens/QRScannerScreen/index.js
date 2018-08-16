import React, { Component } from 'react'
import { View, Alert } from 'react-native'
import { RNCamera } from 'react-native-camera'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { NavigationActions, StackActions } from 'react-navigation'
import { NavigationBar, SafeView, BackButtonContainer } from './styles'
import BackButtonIcon from 'react-native-vector-icons/Ionicons'

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

const resetAction = StackActions.reset({
  index: 1,
  actions: [
    NavigationActions.navigate({ routeName: 'Discover' }),
    NavigationActions.navigate({ routeName: 'Profile' }),
  ],
})

class QRScannerScreen extends Component {
  state = { scannerEnabled: true }
  render() {
    return (
      <Mutation
        mutation={SEND_FRIEND_REQUEST}
        onCompleted={() => this.props.navigation.dispatch(resetAction)}
        onError={() =>
          Alert.alert(
            'Error',
            'Could not scan QR Code',
            [
              {
                text: 'Try Again',
                onPress: () => this.setState({ scannerEnabled: true }),
              },
            ],
            { cancelable: false },
          )
        }
      >
        {createFriendRequest => (
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
                alignItems: 'center',
              }}
              onBarCodeRead={async qrCode => {
                if (this.state.scannerEnabled) {
                  this.setState({ scannerEnabled: false }, () => {
                    const variables = {
                      recipientId: qrCode.data,
                      swipedLeft: false,
                    }
                    createFriendRequest({ variables })
                  })
                }
              }}
            >
              <NavigationBar>
                <SafeView>
                  <BackButtonContainer
                    hitSlop={{ top: 5, left: 5, bottom: 5, right: 5 }}
                    onPress={() => this.props.navigation.goBack()}
                  >
                    <BackButtonIcon
                      name="ios-arrow-back"
                      size={30}
                      color="white"
                    />
                  </BackButtonContainer>
                </SafeView>
              </NavigationBar>
            </RNCamera>
          </View>
        )}
      </Mutation>
    )
  }
}

export default QRScannerScreen
