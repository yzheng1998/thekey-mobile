import PushNotification from 'react-native-push-notification'
import { PushNotificationIOS } from 'react-native'

const configure = () => {
  PushNotification.configure({
    onRegister(token) {
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

    popInitialNotification: true,
    requestPermissions: true,
  })
}

const localNotification = () => {
  setTimeout(() => {
    PushNotification.localNotification({
      autoCancel: true,
      vibrate: true,
      vibration: 300,
      title: 'Notification Title',
      message: 'Notification Message',
    })
  }, 5000)
}

export { configure, localNotification }
