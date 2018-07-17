import React, { Component } from 'react'
import { Image } from 'react-native'
import { Card, LeftContainer, Title } from './styles'
import Rating from './components/RatingStar'
import DevLogo from '../../../assets/devlogo.png'

export default class CompanyCard extends Component {
  render() {
    const { picture, title, rating } = this.props
    return (
      <Card>
        <Image
          source={picture ? { uri: picture } : DevLogo}
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
