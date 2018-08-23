import PushNotification from 'react-native-push-notification'
import { PushNotificationIOS, Alert } from 'react-native'
import { client } from '../apollo'
import gql from 'graphql-tag'

const configure = () => {
  PushNotification.configure({
    onRegister(token) {
      console.log('REGISTERING')
      client
        .mutate({
          variables: {
            registerDeviceInput: {
              type: token.os.toUpperCase(),
              deviceId: token.token,
            },
          },
          mutation: gql`
            mutation registerDevice(
              $registerDeviceInput: RegisterDeviceInput!
            ) {
              registerDevice(registerDeviceInput: $registerDeviceInput) {
                error {
                  message
                }
              }
            }
          `,
        })
        .catch(() => {
          Alert.alert(
            'Something Went Wrong',
            'Could not Register for Push Notifications',
          )
        })
      return token.length
    },

    onNotification(notification) {
      notification.finish(PushNotificationIOS.FetchResult.NoData)
    },

    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
    senderID: '360968734693',
    popInitialNotification: false,
    requestPermissions: false,
  })
}

const localNotification = () => {
  PushNotification.localNotification({
    message: 'Notification Message',
    actions: '["Yes", "No"]',
  })
}

export { configure, localNotification }
