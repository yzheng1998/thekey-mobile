import React, { Component } from 'react'
import { ReportUserButton } from './styles'
import ButtonRow from '../../../../components/MainButtonRow'
import { buttonRadius } from '../../../../constants'

import Icon from 'react-native-vector-icons/Entypo'

export default class ButtonRowView extends Component {
  render() {
    const { reportUser } = this.props
    return (
      <ButtonRow navigation={this.props.navigation}>
        {reportUser && (
          <ReportUserButton hitSlop={buttonRadius} onPress={reportUser}>
            <Icon name="dots-three-horizontal" size={30} color="white" />
          </ReportUserButton>
        )}
      </ButtonRow>
    )
  }
}
