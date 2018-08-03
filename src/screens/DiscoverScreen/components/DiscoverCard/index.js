import React, { Component } from 'react'
import { Image } from 'react-native'
import PropTypes from 'prop-types'
import {
  Card,
  Title,
  Description,
  BackgroundImage,
  TextContainer,
} from './styles'

export default class DiscoverCard extends Component {
  static defaultProps = {
    onPress: null,
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: Image.propTypes.source.isRequired,
    onPress: PropTypes.func,
  }

  render() {
    const { title, description, image, onPress } = this.props
    return (
      <Card onPress={onPress}>
        <BackgroundImage source={image} />
        <TextContainer>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </TextContainer>
      </Card>
    )
  }
}
