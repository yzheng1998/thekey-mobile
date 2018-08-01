import React, { Component } from 'react'
import {
  Background,
  Instructions,
  EssayInput,
  SafeView,
  TextContainer,
  HeaderContainer,
  Heading,
  BackButton,
  View,
  ScrollView,
} from './styles'
import BackButtonIcon from 'react-native-vector-icons/Ionicons'
import ReportProfileButton from '../ReportProfileButton'
import KeyboardSpacer from 'react-native-keyboard-spacer'

const Header = ({ onBackPress, clearResponse }) => (
  <HeaderContainer>
    <BackButton
      onPress={() => {
        onBackPress()
        clearResponse()
      }}
    >
      <BackButtonIcon name="ios-arrow-back" size={33} color="black" />
    </BackButton>
    <Heading>Report Profile</Heading>
    <Instructions>
      Give us some additional information about the situation so we can
      understand what happened.
    </Instructions>
  </HeaderContainer>
)

export default class ReportUserModal extends Component {
  state = {
    response: '',
  }
  clearResponse = () => {
    this.setState({ response: '' })
  }
  render() {
    const { isVisible, closeModal, reportedUserId } = this.props
    return (
      <Background
        animationIn="slideInRight"
        animationOut="slideOutLeft"
        isVisible={isVisible}
      >
        <SafeView>
          <View>
            <ScrollView enabled>
              <Header
                onBackPress={closeModal}
                clearResponse={this.clearResponse}
              />
              <TextContainer>
                <EssayInput
                  value={this.state.response}
                  onChangeText={text => this.setState({ response: text })}
                  multiline
                  autoGrow={false}
                />
              </TextContainer>
            </ScrollView>
            <ReportProfileButton
              disabled={this.state.response === ''}
              closeModal={closeModal}
              clearResponse={this.clearResponse}
              message={this.state.response}
              reportedUserId={reportedUserId}
            />
          </View>
          <KeyboardSpacer />
        </SafeView>
      </Background>
    )
  }
}
