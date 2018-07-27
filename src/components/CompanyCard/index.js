import React, { Component } from 'react'
import { Image } from 'react-native'
import { Card, LeftContainer, Title } from './styles'
import Rating from './components/RatingStar'

export default class CompanyCard extends Component {
  render() {
    const { picture, title, rating, companyId, navigation } = this.props
    return (
      <Card
        onPress={() =>
          navigation.navigate('Review', {
            title,
            rating,
            companyId,
            picture,
          })
        }
      >
        <Image
          source={
            picture
              ? { uri: picture }
              : {
                  uri:
                    'https://images.unsplash.com/photo-1486108334972-f02b6c78ba07?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7b5a12ea524ae41d923b50f2e43f1cb8&auto=format&fit=crop&w=1500&q=80',
                }
          }
          style={{ width: 46, height: 46 }}
        />
        <LeftContainer>
          <Title>{title}</Title>
          <Rating rating={rating} />
        </LeftContainer>
      </Card>
    )
  }
}
