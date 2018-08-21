import PushNotification from 'react-native-push-notification'
import { PushNotificationIOS, Alert } from 'react-native'
import { client } from '../apollo'
import gql from 'graphql-tag'

const configure = () => {
  PushNotification.configure({
    onRegister(token) {
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

    popInitialNotification: false,
    requestPermissions: false,
  })
}

const localNotification = () => {
  console.log('About to Send')
  PushNotification.localNotification({
    message: 'Notification Message',
    actions: '["Yes", "No"]',
  })
  console.log('sent')
  console.log(PushNotification.localNotification)
}

export { configure, localNotification }
