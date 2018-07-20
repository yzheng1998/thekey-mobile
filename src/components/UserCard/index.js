import React, { Component } from 'react'
import { Card, Name, Picture, Subtitle, InfoContainer } from './styles'
import { TouchableOpacity } from 'react-native'

class UserCard extends Component {
  render() {
    const { name, picture, subtitle, ...rest } = this.props
    return (
      <TouchableOpacity {...rest}>
        <Card>
          <Picture source={{ uri: picture }} />
          <InfoContainer>
            <Name>{name}</Name>
            <Subtitle>{subtitle}</Subtitle>
          </InfoContainer>
        </Card>
      </TouchableOpacity>
    )
  }
}

export default UserCard
