import React, { Component } from 'react'
import { Card, LeftContainer, Title, Avatar } from './styles'
import Rating from './components/RatingStar'
import DevLogo from '../../../assets/devlogo.png'

export default class CompanyCard extends Component {
  render() {
    const {
      picture,
      title,
      rating,
      companyId,
      navigation,
      numReviews,
    } = this.props
    return (
      <Card
        onPress={() =>
          navigation.navigate('Review', {
            title,
            rating,
            companyId,
            picture,
            numReviews,
          })
        }
      >
        <Avatar source={picture ? { uri: picture } : DevLogo} />
        <LeftContainer>
          <Title>{title}</Title>
          <Rating rating={rating} />
        </LeftContainer>
      </Card>
    )
  }
}
