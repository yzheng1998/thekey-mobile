import React, { Component } from 'react'
import { Button } from 'react-native-share'
import { Mutation } from 'react-apollo'
import { SEND_INVITATION } from './mutations'

export default class InviteButton extends Component {
  render() {
    const { onPress, children, iconSrc } = this.props
    return (
      <Mutation mutation={SEND_INVITATION}>
        {sendInvitation => (
          <Button
            iconSrc={iconSrc}
            onPress={() => {
              onPress()
              sendInvitation()
            }}
          >
            {children}
          </Button>
        )}
      </Mutation>
    )
  }
}
