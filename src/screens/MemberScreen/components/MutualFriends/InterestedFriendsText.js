import { Component } from 'react'
import PropTypes from 'prop-types'

export default class InterestedFriendsText extends Component {
  static defaultProps = {
    mutualFriends: null,
    connectionsNum: 0,
  }
  static propTypes = {
    mutualFriends: PropTypes.arrayOf(Object),
    connectionsNum: PropTypes.number,
  }
  render() {
    const { mutualFriends, connectionsNum } = this.props
    if (connectionsNum) {
      return `${mutualFriends[0].firstName} and ${connectionsNum - 1} friends`
    }
    return '0 interested friends'
  }
}
