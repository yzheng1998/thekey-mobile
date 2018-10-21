import React, { Component } from 'react'
import Header from '../../components/Header'
import { Screen } from './styles'
import BasicSubtitle from '../../components/BasicSubtitle'
import VerificationRow from '../../components/VerificationRow'

export default class VerificationScreen extends Component {
  state = {
    code1: '',
    code2: '',
    code3: '',
    code4: '',
  }
  updateText = obj => {
    this.setState(obj)
  }
  render() {
    return (
      <Screen>
        <Header
          title="Verify Your Email"
          showBack
          onBackPress={() => this.props.navigation.goBack()}
          progress="14.2%"
        />
        <BasicSubtitle>
          Please enter the 4 digit code we just sent you
        </BasicSubtitle>
        <VerificationRow
          onChangeText={this.updateText}
          onSubmit={() => this.props.navigation.navigate('PersonalDetails')}
        />
      </Screen>
    )
  }
}
