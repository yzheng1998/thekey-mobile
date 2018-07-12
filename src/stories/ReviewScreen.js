import { storiesOf } from '@storybook/react-native'
import React from 'react'
import ReviewScreen from '../screens/ReviewScreen'

const reviews = [
  {
    title: 'Great company, great people',
    date: '2018-07-09 13:27:03.246-04',
    rating: 4.4,
    currentOrFormerEmployee: 'Current Employee',
    jobPosition: 'General Manager',
    pros:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    cons:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    id: '1',
  },
  {
    title: 'Great company, great people',
    date: '2018-07-09 13:27:03.246-04',
    rating: 4.4,
    currentOrFormerEmployee: 'Current Employee',
    jobPosition: 'General Manager',
    pros:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    cons:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    id: '2',
  },
  {
    title: 'Great company, great people',
    date: '2018-07-09 13:27:03.246-04',
    rating: 4.4,
    currentOrFormerEmployee: 'Current Employee',
    jobPosition: 'General Manager',
    pros:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    cons:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    id: '3',
  },
]

const picture = {
  uri:
    'https://cdn.zeplin.io/5b18b9740bc6b2af45546408/assets/6FE3D570-0BE7-40CA-923D-A045ECA2830D.png',
}
storiesOf('CenteredView').add('Review Screen', () => (
  <ReviewScreen
    reviews={reviews}
    picture={picture}
    company="Beats by Dre"
    averageRating={4.4}
    numReviews="300"
  />
))
