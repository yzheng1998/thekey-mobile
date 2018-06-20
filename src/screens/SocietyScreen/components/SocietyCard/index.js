import React, { Component } from 'react'
import { CardContainer, BioText } from './styles'
import ProfilePicBlock from '../ProfilePicBlock'
import TagLine from '../../../../components/TagLine'
import ConnectionsRow from '../ConnectionsRow'

export default class SocietyCard extends Component {
  render() {
    const {
      profilePicture,
      firstName,
      lastName,
      hometown,
      state,
      tags,
      bio,
      mutualFriends,
    } = this.props.user
    const selectMutualFriends = [...mutualFriends].slice(0, 5)
    const selectTags = [...tags].slice(0, 10)
    return (
      <CardContainer>
        <ProfilePicBlock
          profilePic={profilePicture}
          name={`${firstName} ${lastName}`}
          city={hometown}
          state={state}
        />
        <TagLine tagData={selectTags} lines={2} />
        <BioText numberOfLines={3}>{bio}</BioText>
        <ConnectionsRow
          avatarSize={28}
          connectionsNum={mutualFriends.length}
          mutualFriends={selectMutualFriends}
        />
      </CardContainer>
    )
  }
}
