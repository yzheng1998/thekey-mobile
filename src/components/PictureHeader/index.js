import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import {
  BlockContainer,
  BackgroundPicture,
  Picture,
  ContentContainer,
  PictureContainer,
  MiniQRCode,
  Tint,
} from './styles'

import QRCodeGenerator from '../QRCodeGenerator'

const SmallQRCode = ({ id, openModal }) => (
  <MiniQRCode onPress={openModal} underlayColor="rgba(0, 0, 0, 0.2)">
    <QRCodeGenerator value={id} size={25} />
  </MiniQRCode>
)
export default class PictureHeader extends Component {
  static defaultProps = {
    showQRCode: false,
    id: '',
    openModal: null,
  }

  render() {
    const {
      picture,
      showQRCode,
      id,
      openModal,
      marginTop,
      children,
    } = this.props
    const displayPicture = picture
      ? { uri: picture }
      : {
          uri:
            'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a015de4c5a8a5e7be8e88ee39fb1ce2e&auto=format&fit=crop&w=1500&q=80',
        }

    return (
      <BlockContainer>
        <StatusBar barStyle="light-content" />
        <BackgroundPicture source={displayPicture} blurRadius={20}>
          <Tint>
            <ContentContainer>
              <PictureContainer marginTop={marginTop}>
                <Picture
                  source={displayPicture}
                  avatarSize={this.props.avatarSize}
                />
                {showQRCode && <SmallQRCode id={id} openModal={openModal} />}
              </PictureContainer>
              {children}
            </ContentContainer>
          </Tint>
        </BackgroundPicture>
      </BlockContainer>
    )
  }
}
