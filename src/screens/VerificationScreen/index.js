import React, { Component } from 'react'
import Header from '../../components/Header'
import { Screen } from './styles'
import BasicSubtitle from '../../components/BasicSubtitle'
import VerificationRow from '../../components/VerificationRow'
import { Alert } from 'react-native'

export default class VerificationScreen extends Component {
  render() {
    const verificationCode = this.props.navigation
      .getParam('verificationCode')
      .join('')

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
          compareWithCode={verificationCode}
          onSubmit={isValid => {
            if (isValid) this.props.navigation.navigate('Password')
            else {
              Alert.alert(
                'Incorrect Code',
                'Oops! You inputted the wrong code. Please try again.',
                [{ text: 'OK', onPress: () => {} }],
                { cancelable: true },
              )
            }
          }}
        />
      </Screen>
    )
  }
}
