import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

export default class MutualConnectionsText extends Component {
  static defaultProps = {
    connectionsNum: 0,
  }
  static propTypes = {
    connectionsNum: PropTypes.number,
  }
  render() {
    const { connectionsNum } = this.props
    if (connectionsNum) {
      return <Text>`${connectionsNum} mutual connections`</Text>
    }
    return <Text>`0 mutual connections`</Text>
  }
}
