import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'
import { Container, CenteredContainer } from './styles'

export default class LoadingWrapper extends Component {
  render() {
    const { children, loading } = this.props
    return (
      <Container>
        {loading ? (
          <CenteredContainer>
            <ActivityIndicator color="rgb(250, 53, 121)" />
          </CenteredContainer>
        ) : (
          <Container>{children}</Container>
        )}
      </Container>
    )
  }
}
