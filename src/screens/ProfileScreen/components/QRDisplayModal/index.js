import React, { Component } from 'react'
import {
  Container,
  Tint,
  SafeView,
  QRCodeContainer,
  SurroundingContainer,
  ScannerText,
  ScannerButtonContainer,
  ScanImage,
  Button,
} from './styles'
import QRCodeGenerator from '../../../../components/QRCodeGenerator'
import ScannerIcon from '../../../../../assets/scan_code_10x.png'

export default class QRDisplayModal extends Component {
  render() {
    const { hideQRCodeDisplay, id, navigate } = this.props
    return (
      <Tint>
        <SafeView>
          <Container>
            <SurroundingContainer onPress={hideQRCodeDisplay} activeOpacity={1}>
              <ScannerButtonContainer>
                <Button
                  onPress={() => {
                    navigate()
                    hideQRCodeDisplay()
                  }}
                >
                  <ScanImage source={ScannerIcon} />
                </Button>
                <ScannerText>Scan Code</ScannerText>
              </ScannerButtonContainer>
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
