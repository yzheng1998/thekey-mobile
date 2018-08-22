import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AsyncStorage } from 'react-native'
import { Background, Icon, IconButton, Name, Title, TextBox } from './styles'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import LoadingWrapper from '../../../../components/LoadingWrapper'

const GET_VIEWER = gql`
  query viewer {
    viewer {
      ... on User {
        id
        profilePicture
      }
    }
  }
`

const defaultProfilePicture =
  'https://images.unsplash.com/photo-1519145897500-869c40ccb024?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dc363c8e033813d4f7b798846bb13a24&auto=format&fit=crop&w=582&q=80'

export default class Header extends Component {
  static defaultProps = {}

  static propTypes = {
    name: PropTypes.string.isRequired,
  }

  render() {
    const { name } = this.props
    return (
      <Background>
        <TextBox>
          <Name>HI {name.toUpperCase()}</Name>
          <Title>Discover</Title>
        </TextBox>
        <Query query={GET_VIEWER}>
          {({ data, error, loading }) => {
            if (loading) return <LoadingWrapper loading />
            if (error || !data.viewer) AsyncStorage.clear()
            const { profilePicture } = data.viewer
            const profilePictureUrl = profilePicture || defaultProfilePicture
            return (
              <IconButton
                onPress={() => this.props.navigation.navigate('Profile')}
              >
                <Icon source={{ uri: profilePictureUrl }} />
              </IconButton>
            )
          }}
        </Query>
      </Background>
    )
  }
}
