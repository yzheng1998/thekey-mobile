import React, { Component } from 'react'
import { CardContainer, BioText } from './styles'
import ProfilePicBlock from '../ProfilePicBlock'
import TagLine from '../../../../components/TagLine'
import MutualConnectionsRow from '../MutualConnectionsRow'

export default class SocietyCard extends Component {
  viewMember = memberId => {
    this.props.navigation.navigate('Member', {
      id: memberId,
    })
  }
  render() {
    const {
      id,
      profilePicture,
      firstName,
      lastName,
      hometown,
      tags,
      bio,
      mutualFriends,
    } = this.props.user
    const selectTags = [...tags].slice(0, 10)
    return (
      <CardContainer activeOpacity={1} onPress={() => this.viewMember(id)}>
        <ProfilePicBlock
          profilePic={profilePicture}
          name={`${firstName} ${lastName}`}
          hometown={hometown}
        />
        <TagLine tagData={selectTags} />
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
