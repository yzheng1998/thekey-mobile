import { client } from '../src/apollo'
import { UPDATE_LOCATION } from './mutations'

export const setPosition = () => {
  navigator.geolocation.getCurrentPosition(position => {
    client.mutate({
      variables: {
        coordinateInput: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
      },
      mutation: UPDATE_LOCATION,
    })
  })
}
