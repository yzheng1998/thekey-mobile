import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'
import { Mutation } from 'react-apollo'
import PropTypes from 'prop-types'
import { REJECT_FRIEND_REQUEST } from './queries'

const Button = styled.Button``

class RejectButton extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }
  render() {
    const { id, label } = this.props
    return (
      <Mutation mutation={REJECT_FRIEND_REQUEST}>
        {(rejectFriendRequest, { loading, data }) => (
          <View>
            {loading && <Text>{loading}</Text>}
            {data && data.error && <Text>{data.error.message}</Text>}
            <Button
              onPress={() => {
                const variables = { id }
                rejectFriendRequest({ variables })
              }}
              title={label}
            />
          </View>
        )}
      </Mutation>
    )
  }
}
export default RejectButton
