import React, { Component } from 'react'
import { ButtonRow, BackButton, ReportUserButton } from './styles'

import BackArrow from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/Entypo'

export default class ButtonRowView extends Component {
  render() {
    const { reportUser } = this.props
    return (
      <ButtonRow>
        <BackButton onPress={this.props.goBack}>
          <BackArrow name="ios-arrow-back" color="white" size={33} />
        </BackButton>
        {reportUser && (
          <ReportUserButton onPress={reportUser}>
            <Icon name="dots-three-horizontal" size={30} color="white" />
          </ReportUserButton>
        )}
      </ButtonRow>
    )
  }
}
