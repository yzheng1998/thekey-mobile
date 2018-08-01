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
} from './styles'
import BackButtonIcon from 'react-native-vector-icons/Ionicons'
import ReportProfileButton from '../ReportProfileButton'

const Header = ({ onBackPress }) => (
  <HeaderContainer>
    <BackButton onPress={onBackPress}>
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
  render() {
    const { isVisible, closeModal } = this.props
    return (
      <Background
        animationIn="slideInRight"
        animationOut="slideOutLeft"
        isVisible={isVisible}
      >
        <SafeView>
          <Header onBackPress={closeModal} />
          <TextContainer>
            <EssayInput
              value={this.state.response}
              onChangeText={text => this.setState({ response: text })}
              multiline
              autoGrow={false}
            />
          </TextContainer>
          <ReportProfileButton />
        </SafeView>
      </Background>
    )
  }
}
