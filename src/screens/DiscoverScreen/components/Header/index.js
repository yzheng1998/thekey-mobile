import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Image } from 'react-native'
import { Background, Icon, Name, Title, TextBox } from './styles'

export default class Header extends Component {
  static defaultProps = {}

  static propTypes = {
    name: PropTypes.string.isRequired,
    avatar: Image.propTypes.source.isRequired,
  }

  render() {
    const { name, avatar } = this.props
    return (
      <Background>
        <TextBox>
          <Name>HI {name}</Name>
          <Title>Discover</Title>
        </TextBox>
        <Icon source={avatar} />
      </Background>
    )
  }
}
