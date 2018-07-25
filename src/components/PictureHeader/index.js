import React, { Component } from 'react'
import {
  BlockContainer,
  BackgroundPicture,
  Picture,
  SafeView,
  ContentContainer,
  PictureContainer,
  MiniQRCode,
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
    const { picture, showQRCode, id, openModal } = this.props
    const displayPicture = picture
      ? { uri: picture }
      : {
          uri:
            'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a015de4c5a8a5e7be8e88ee39fb1ce2e&auto=format&fit=crop&w=1500&q=80',
        }

    return (
      <BlockContainer>
        <BackgroundPicture source={displayPicture} blurRadius={20}>
          <SafeView>
            <ContentContainer>
              <PictureContainer>
                <Picture
                  source={displayPicture}
                  avatarSize={this.props.avatarSize}
                />
                {showQRCode && <SmallQRCode id={id} openModal={openModal} />}
              </PictureContainer>
              {this.props.children}
            </ContentContainer>
          </SafeView>
        </BackgroundPicture>
      </BlockContainer>
    )
  }
}
