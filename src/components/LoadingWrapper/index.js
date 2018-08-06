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
            <ActivityIndicator color="rgb(250, 53, 121)" />
          </CenteredContainer>
        ) : (
          <Container style={style}>{children}</Container>
        )}
      </Container>
    )
  }
}
