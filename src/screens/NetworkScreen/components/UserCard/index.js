import React, { Component } from 'react'
import { Card, Name, Picture, Location, InfoContainer } from './styles'
import { TouchableOpacity, View } from 'react-native'

class UserCard extends Component {
  render() {
    const { name, picture, location } = this.props
    return (
      <TouchableOpacity>
        <Card>
          <Picture source={{ uri: picture }} />
          <InfoContainer>
            <Name>{name}</Name>
            <Location>{location}</Location>
          </InfoContainer>
        </Card>
      </TouchableOpacity>
    )
  }
}

export default UserCard
