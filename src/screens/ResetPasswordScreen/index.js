import React, { Component } from 'react'
import { ScreenContainer, SubtitleView, Subtitle, SafeView } from './styles'
import Header from '../../components/Header'
import { KeyboardAvoidingView } from 'react-native'
import LineInput from '../../components/LineInput'
import Icon from 'react-native-vector-icons/Feather'
import ResetPasswordButton from './components/ResetPasswordButton'

export default class ResetPasswordScreen extends Component {
  state = {
    newPassword: '',
  }

  updateNewPassword = text => {
    this.setState({ newPassword: text })
  }

  render() {
    return (
      <ScreenContainer>
        <SafeView>
          <Header
            title="Reset Password"
            showBack
            onBackPress={() => this.props.navigation.goBack()}
          />
          <KeyboardAvoidingView behavior="position" enabled>
            <SubtitleView>
              <Subtitle>
                Enter your email address, and we will send you a link to reset
                your password.
              </Subtitle>
            </SubtitleView>
            <LineInput
              updateText={text => this.updateText('email', text)}
              text={this.state.email}
              placeholderText="Email"
              autoCapitalize="none"
            >
              <Icon
                name="mail"
                size={18}
                color="rgb(139, 133, 150)"
                style={{ marginLeft: 8 }}
              />
            </LineInput>
            <ResetPasswordButton />
          </KeyboardAvoidingView>
        </SafeView>
      </ScreenContainer>
    )
  }
}
