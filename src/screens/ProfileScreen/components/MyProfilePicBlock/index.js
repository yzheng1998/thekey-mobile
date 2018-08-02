import React, { Component } from 'react'
import {
  BlockContainer,
  EventTitleText,
  LocationText,
  EditButton,
  EditLabel,
} from './styles'
import PictureHeader from '../../../../components/PictureHeader'
import EditPencil from 'react-native-vector-icons/MaterialIcons'
import { View, Modal } from 'react-native'
import QRDisplayModal from '../QRDisplayModal'

export default class MyProfilePicBlock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showQRCodeModal: false,
    }
  }

  openQRModal = () => {
    this.setState({
      showQRCodeModal: true,
    })
  }

  render() {
    const { profilePic, name, hometown, id, navigation } = this.props
    return (
      <View>
        <Modal
          visible={this.state.showQRCodeModal}
          transparent
          animationType="slide"
        >
          <QRDisplayModal
            id={id}
            hideQRCodeDisplay={() =>
              this.setState({
                showQRCodeModal: false,
              })
            }
            navigate={() => navigation.push('QRScanner', { currentUserId: id })}
          />
        </Modal>
        <BlockContainer>
          <PictureHeader
            picture={profilePic}
            avatarSize={123}
            id={id}
            showQRCode
            openModal={this.openQRModal}
            height={350}
          >
            <EventTitleText onPress={this.openQRModal}>{name}</EventTitleText>
            <LocationText>{hometown}</LocationText>
            <EditButton
              activeOpacity={0.5}
              onPress={() => this.props.navigation.navigate('EditProfile')}
            >
              <EditPencil name="edit" color="white" />
              <EditLabel>EDIT PROFILE</EditLabel>
            </EditButton>
          </PictureHeader>
        </BlockContainer>
      </View>
    )
  }
}
