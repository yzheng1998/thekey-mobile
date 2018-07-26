import React, { Component } from 'react'
import { CardContainer, BioText } from './styles'
import ProfilePicBlock from '../ProfilePicBlock'
import TagLine from '../../../../components/TagLine'
import MutualConnectionsRow from '../MutualConnectionsRow'

export default class SocietyCard extends Component {
  render() {
    const {
      profilePicture,
      firstName,
      lastName,
      hometown,
      tags,
      bio,
      mutualFriends,
    } = this.props.user
    const selectTags = [...tags].slice(0, 10)
    const lines = selectTags.length > 4 ? 2 : 1
    return (
      <CardContainer>
        <ProfilePicBlock
          profilePic={profilePicture}
          name={`${firstName} ${lastName}`}
          hometown={hometown}
        />
        <TagLine tagData={selectTags} lines={lines} />
        <BioText numberOfLines={3}>{bio}</BioText>
        <MutualConnectionsRow
          navigation={this.props.navigation}
          avatarSize={28}
          connectionsNum={mutualFriends.length}
          mutualFriends={mutualFriends}
        />
      </CardContainer>
    )
  }
}
