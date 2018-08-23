import React, { Component } from 'react'
import {
  Background,
  Heading,
  CancelContainer,
  CancelButton,
  CancelText,
  SafeView,
} from './styles'
import { buttonRadius } from '../../../../constants'

export default class SearchModalHeader extends Component {
  render() {
    const { closeModal } = this.props
    return (
      <SafeView>
        <Background>
          <CancelContainer>
            <CancelButton hitSlop={buttonRadius} onPress={closeModal}>
              <CancelText>Cancel</CancelText>
            </CancelButton>
          </CancelContainer>
          <Heading>Search Companies</Heading>
        </Background>
      </SafeView>
    )
  }
}
