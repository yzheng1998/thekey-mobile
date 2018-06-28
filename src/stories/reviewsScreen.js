import { storiesOf } from '@storybook/react-native'
import React from 'react'
import ReviewsScreen from '../screens/ReviewsScreen'

const review = {
  picture: {
    uri:
      'https://cdn.zeplin.io/5b18b9740bc6b2af45546408/assets/6FE3D570-0BE7-40CA-923D-A045ECA2830D.png',
  },
  title: 'Beats By Dre',
  reviews: '300',
  rating: 4.4,
  id: '1',
}

const review2 = Object.assign({}, review, { id: '2' })

const review3 = Object.assign({}, review, { id: '3' })

storiesOf('CenteredView').add('ReviewsScreen', () => (
  <ReviewsScreen reviews={[review, review2, review3]} />
))
