import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Background, Icon, IconButton, Name, Title, TextBox } from './styles'

export default class Header extends Component {
  static defaultProps = {}

  static propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }

  render() {
    const { name, avatar } = this.props
    return (
      <Background>
        <TextBox>
          <Name>HI {name.toUpperCase()}</Name>
          <Title>Discover</Title>
        </TextBox>
        <IconButton onPress={() => this.props.navigation.navigate('Profile')}>
          <Icon source={{ uri: avatar }} />
        </IconButton>
      </Background>
    )
  }
}
