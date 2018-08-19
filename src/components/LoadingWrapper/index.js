import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'
import { Container, CenteredContainer } from './styles'

export default class LoadingWrapper extends Component {
  render() {
    const { children, loading, style } = this.props
    return (
      <Container>
        {loading ? (
          <CenteredContainer>
            <ActivityIndicator color="rgb(244, 89, 82)" />
          </CenteredContainer>
        ) : (
          <Container style={style}>{children}</Container>
        )}
      </Container>
    )
  }
}
