import React, { Component } from 'react'
import { Card, RightContainer, Title, CompanyPicture } from './styles'
import Rating from './components/RatingStar'

const defaultPicture =
  'https://images.unsplash.com/photo-1486108334972-f02b6c78ba07?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7b5a12ea524ae41d923b50f2e43f1cb8&auto=format&fit=crop&w=1500&q=80'

export default class CompanyCard extends Component {
  render() {
    const {
      picture,
      title,
      rating,
      companyId,
      navigation,
      numReviews,
      onPress,
    } = this.props
    return (
      <Card
        onPress={() => {
          if (onPress) onPress()
          else
            navigation.navigate('Review', {
              title,
              rating,
              companyId,
              picture,
              numReviews,
            })
        }}
      >
        <CompanyPicture
          source={{
            uri: picture || defaultPicture,
          }}
        />
        <RightContainer>
          <Title>{title}</Title>
          <Rating rating={rating} />
        </RightContainer>
      </Card>
    )
  }
}
