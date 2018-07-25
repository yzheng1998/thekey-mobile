import React, { Component } from 'react'
import {
  Container,
  Tint,
  SafeView,
  QRCodeContainer,
  SurroundingContainer,
} from './styles'
import QRCodeGenerator from '../../../../components/QRCodeGenerator'

export default class QRDisplayModal extends Component {
  render() {
    const { hideQRCodeDisplay, id } = this.props
    return (
      <Tint>
        <SafeView>
          <Container>
            <SurroundingContainer onPress={hideQRCodeDisplay} activeOpacity={1}>
              <QRCodeContainer onPress={() => null} activeOpacity={1}>
                <QRCodeGenerator size={200} id={id} />
              </QRCodeContainer>
            </SurroundingContainer>
          </Container>
        </SafeView>
      </Tint>
    )
  }
}
