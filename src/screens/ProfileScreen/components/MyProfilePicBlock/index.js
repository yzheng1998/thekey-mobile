import React, { Component } from 'react'
import { EventTitleText, LocationText, EditButton, EditLabel } from './styles'
import PictureHeader from '../../../../components/PictureHeader'
import EditPencil from 'react-native-vector-icons/MaterialIcons'
import { View, Modal } from 'react-native'
import QRDisplayModal from '../QRDisplayModal'
import { buttonRadius } from '../../../../constants'

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
      <View style={{ flex: 1 }}>
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
        <PictureHeader
          picture={profilePic}
          avatarSize={123}
          id={id}
          showQRCode
          openModal={this.openQRModal}
        >
          <EventTitleText onPress={this.openQRModal}>{name}</EventTitleText>
          <LocationText>{hometown}</LocationText>
          <EditButton
            hitSlop={buttonRadius}
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate('EditProfile')}
          >
            <EditPencil name="edit" color="white" size={14} />
            <EditLabel>EDIT PROFILE</EditLabel>
          </EditButton>
        </PictureHeader>
      </View>
    )
  }
}
