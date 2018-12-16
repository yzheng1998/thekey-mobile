import React, { Component } from 'react'
import { Platform } from 'react-native'
import Share, { ShareSheet } from 'react-native-share'
import { email, text, textWithoutEncoding } from 'react-native-communications'
import InviteButton from './components/InviteButton'
import { EMAIL_ICON, TEXT_ICON, MORE_ICON } from './constants'

export default class ShareMenu extends Component {
  render() {
    const shareOptions = {
      title: 'Share With',
      message: 'Download The Key here: ',
      url: 'http://onelink.to/ywz9nu',
      subject: 'Share Link',
    }

    return (
      <ShareSheet
        visible={this.props.visible}
        onCancel={this.props.toggleInviteFriendModal}
      >
        <InviteButton
          iconSrc={{ uri: EMAIL_ICON }}
          onPress={() => {
            this.props.toggleInviteFriendModal()
            email(
              null,
              null,
              null,
              'The Key wants you!',
              'Join The Key! https://itunes.apple.com/us/app/the-key-society/id1397945385?mt=8',
            )
          }}
        >
          Email
        </InviteButton>
        <InviteButton
          iconSrc={{ uri: TEXT_ICON }}
          onPress={() => {
            this.props.toggleInviteFriendModal()
            if (Platform.OS === 'iOS') {
              text(null, 'Join The Key! http://onelink.to/ywz9nu')
            } else {
              textWithoutEncoding(
                null,
                'Join The Key! http://onelink.to/ywz9nu',
              )
            }
          }}
        >
          Text
        </InviteButton>
        <InviteButton
          iconSrc={{ uri: MORE_ICON }}
          onPress={() => {
            this.props.toggleInviteFriendModal()
            Share.open(shareOptions)
          }}
        >
          More
        </InviteButton>
      </ShareSheet>
    )
  }
}
