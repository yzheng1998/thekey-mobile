import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'
import { Mutation } from 'react-apollo'
import PropTypes from 'prop-types'
import { ACCEPT_FRIEND_REQUEST } from './queries'

const Button = styled.Button``

class AcceptButton extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }
  render() {
    const { id, label } = this.props
    return (
      <Mutation mutation={ACCEPT_FRIEND_REQUEST}>
        {(acceptFriendRequest, { loading, data }) => (
          <View>
            {loading && <Text>{loading}</Text>}
            {data && data.error && <Text>{data.error.message}</Text>}
            <Button
              onPress={() => {
                const variables = { id }
                acceptFriendRequest({ variables })
              }}
              title={label}
            />
          </View>
        )}
      </Mutation>
    )
  }
}
export default AcceptButton
