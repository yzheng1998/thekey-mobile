import React, { Component } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { ScreenContainer, SubtitleView, Subtitle } from './styles'
import Header from '../../components/Header'
import LineInput from '../../components/LineInput'
import Icon from 'react-native-vector-icons/Feather'
import RegisterButton from '../../components/RegisterButton'

export default class SignUpScreen extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }

  updateText = (key, text) => {
    this.setState({ [key]: text })
  }

  render() {
    const { firstName, lastName, email, password } = this.state
    const disabled = !(firstName && lastName && email && password.length > 6)
    return (
      <ScreenContainer>
        <KeyboardAvoidingView behavior="position" enabled>
          <Header
            title="Sign Up"
            showBack
            onBackPress={() => this.props.navigation.goBack()}
          />
          <LineInput
            updateText={text => this.updateText('firstName', text)}
            text={this.state.firstName}
            placeholderText="First name"
          />
          <LineInput
            updateText={text => this.updateText('lastName', text)}
            text={this.state.lastName}
            placeholderText="Last name"
          />
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
          <LineInput
            updateText={text => this.updateText('password', text)}
            text={this.state.password}
            placeholderText="Password (minimum 6 characters)"
            secureTextEntry
            autoCapitalize="none"
          >
            <Icon
              name="lock"
              size={18}
              color="rgb(139, 133, 150)"
              style={{ marginLeft: 8 }}
            />
          </LineInput>
          <SubtitleView>
            <Subtitle>
              “By clicking “sign up & accept” you agree to The Keys{' '}
              <Subtitle hyperlink onPress={() => null}>
                terms & conditions{' '}
              </Subtitle>
              and{' '}
              <Subtitle hyperlink onPress={() => null}>
                privacy policy
              </Subtitle>”
            </Subtitle>
          </SubtitleView>
          <RegisterButton
            onPress={() =>
              this.props.navigation.navigate('PersonalDetails', {
                userInfo: {
                  firstName,
                  lastName,
                  email,
                  password,
                },
              })
            }
            buttonText="SIGN UP & ACCEPT"
            disabled={disabled}
          />
        </KeyboardAvoidingView>
      </ScreenContainer>
    )
  }
}
