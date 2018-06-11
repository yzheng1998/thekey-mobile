import React, { Component } from 'react'
import { Image } from 'react-native'
import PropTypes from 'prop-types'
import {
  Card,
  Title,
  Description,
  BackgroundImage,
  Wrapper,
  Tint,
} from './styles'

export default class DiscoverCard extends Component {
  static defaultProps = {
    tintColor: 'rgba(52, 52, 52, 0.8)',
    onPress: null,
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: Image.propTypes.source.isRequired,
    tintColor: PropTypes.string,
    onPress: PropTypes.func,
  }

  render() {
    const { title, description, image, onPress, tintColor } = this.props
    return (
      <Card onPress={onPress}>
        <Tint tintColor={tintColor} />
        <BackgroundImage source={image} />
        <Wrapper>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Wrapper>
      </Card>
    )
  }
}
