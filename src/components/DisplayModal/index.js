import React, { Component } from 'react'
import Modal from 'react-native-modal'
import Header from '../../components/Header'

export default class DisplayModal extends Component {
  render() {
    const { isVisible, onBackPress, children, title } = this.props
    return (
      <Modal
        isVisible={isVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        style={{ margin: 0, backgroundColor: 'white' }}
      >
        <Header
          noMargin
          onBackPress={onBackPress}
          showDivider
          showBack
          title={title}
        />
        {children}
      </Modal>
    )
  }
}
