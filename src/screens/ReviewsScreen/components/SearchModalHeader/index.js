import React, { Component } from 'react'
import {
  Background,
  Heading,
  CancelContainer,
  CancelButton,
  CancelText,
  SafeView,
} from './styles'

export default class SearchModalHeader extends Component {
  render() {
    const { closeModal } = this.props
    return (
      <SafeView>
        <Background>
          <CancelContainer>
            <CancelButton onPress={closeModal}>
              <CancelText>Cancel</CancelText>
            </CancelButton>
          </CancelContainer>
          <Heading>Search Companies</Heading>
        </Background>
      </SafeView>
    )
  }
}
