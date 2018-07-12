import React, { Component } from 'react'
import {
  BlockContainer,
  EventTitleText,
  LocationText,
  EditButton,
  EditLabel,
  Container,
} from './styles'
import PictureHeader from '../../../../components/PictureHeader'
import MutualFriends from '../MutualFriends'

const friends = [
  {
    firstName: 'Yuke',
    id: 1,
    profilePicture: {
      uri:
        'https://scontent.fzty2-1.fna.fbcdn.net/v/t31.0-8/19095354_1322253334562342_5268478069300274794_o.jpg?_nc_cat=0&oh=5998f02ad58ac913850952492aaa62ba&oe=5BBDE33A',
    },
  },
  {
    firstName: 'Noah',
    id: 2,
    profilePicture: {
      uri: 'https://www.dev.hsa.net/img/team/Noah.jpg',
    },
  },
  {
    firstName: 'Humprey',
    id: 3,
    profilePicture: {
      uri: 'https://www.dev.hsa.net/img/team/humphrey.JPG',
    },
  },
  {
    firstName: 'Ivraj',
    id: 4,
    profilePicture: {
      uri: 'https://www.dev.hsa.net/img/team/Ivraj.jpg',
    },
  },
  {
    firstName: 'Jovi',
    id: 5,
    profilePicture: {
      uri: 'https://www.dev.hsa.net/img/team/Jovin.jpg',
    },
  },
]

export default class MyProfilePicBlock extends Component {
  render() {
    const { profilePic, name, city, state } = this.props
    return (
      <BlockContainer>
        <PictureHeader picture={profilePic} avatarSize={123}>
          <EventTitleText>{name}</EventTitleText>
          <LocationText>
            {city}, {state}
          </LocationText>
          <Container>
            <MutualFriends mutualFriends={friends} avatarSize={26} />
          </Container>
          <EditButton
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate('EditProfile')}
          >
            <EditLabel>CONNECT</EditLabel>
          </EditButton>
        </PictureHeader>
      </BlockContainer>
    )
  }
}
