import React, { Component } from 'react'
import { ListItem } from 'react-native-elements'
import { View } from 'react-native'
import AcceptButton from './AcceptButton'
import RejectButton from './RejectButton'
import PropTypes from 'prop-types'

class FriendRequestListItem extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    friendRequestID: PropTypes.string.isRequired,
  }

  render() {
    const { title, friendRequestID } = this.props
    return (
      <ListItem
        title={title}
        subtitle={
          <View>
            <AcceptButton id={friendRequestID} label="Accept" />
            <RejectButton id={friendRequestID} label="Reject" />
          </View>
        }
      />
    )
  }
}
export default FriendRequestListItem
