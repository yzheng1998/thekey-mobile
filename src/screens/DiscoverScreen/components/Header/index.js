import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
          {({ data, loading }) => {
            if (loading) return <LoadingWrapper loading />
            return (
              <IconButton
                onPress={() => this.props.navigation.navigate('Profile')}
              >
                <Icon source={{ uri: data.viewer.profilePicture }} />
              </IconButton>
            )
          }}
        </Query>
      </Background>
    )
  }
}
