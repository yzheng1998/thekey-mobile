import React, { Component } from 'react'
import { CardContainer, BioText } from './styles'
import ProfilePicBlock from '../ProfilePicBlock'
import TagLine from '../../../../components/TagLine'
import ConnectionsRow from '../ConnectionsRow'

export default class SocietyCard extends Component {
  render() {
    console.log(this.props.user)
    return (
      <CardContainer>
        <ProfilePicBlock
          profilePic={this.props.user.profilePic}
          name={this.props.user.firstName + ' ' + this.props.user.lastName}
          city={this.props.user.hometown}
          state={this.props.user.state}
        />
        <TagLine tagData={this.props.user.tags} lines={2} />
        <BioText numberOfLines={3}>{this.props.user.bio}</BioText>
        <ConnectionsRow
          avatarNum={5}
          avatarSize={28}
          mutualFriends={this.props.user.mutualFriends}
        />
      </CardContainer>
    )
  }
}
