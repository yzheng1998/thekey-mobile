import { client } from '../src/apollo'
import { UPDATE_LOCATION } from './mutations'
import { Alert } from 'react-native'

export const setPosition = () => {
  navigator.geolocation.getCurrentPosition(
    position => {
      client
        .mutate({
          variables: {
            coordinateInput: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            },
          },
          mutation: UPDATE_LOCATION,
        })
        .catch(() => {
          Alert.alert(
            'Something Went Wrong',
            'Could not Register for Push Notifications',
          )
        })
    },
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
  )
}
