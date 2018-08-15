import React, { Component } from 'react'
import {
  Title,
  Container,
  Prompt,
  LetterInput,
  BackButtonContainer,
  BigContainer,
} from './styles'
import ApplyButton from './components/ApplyButton'
import BackButton from 'react-native-vector-icons/Ionicons'
import KeyboardSpacer from 'react-native-keyboard-spacer'

export default class ApplyNowModal extends Component {
  state = {
    content: '',
  }

  clearContent = () => {
    this.setState({ content: '' })
  }
  render() {
    const { isVisible, toggleApplyModal, refreshPage } = this.props
    return (
      <BigContainer
        isVisible={isVisible}
        animationIn="slideInRight"
        animationOut="slideOutRight"
      >
        <Container keyboardShouldPersistTaps="handled">
          <BackButtonContainer
            onPress={() => {
              toggleApplyModal()
              this.clearContent()
            }}
          >
            <BackButton
              name="ios-arrow-back"
              size={27}
              color="rgb(148,157,170)"
            />
          </BackButtonContainer>
          <Title>Apply Now</Title>
          <Prompt>
            Tell us in a few words what makes you the right person for this job.
            Your CV and profile information will also be included.
          </Prompt>
          <LetterInput
            multiline
            autoGrow={false}
            value={this.state.content}
            onChangeText={content => this.setState({ content })}
            placeholderTextColor="rgb(69,77,88)"
          />
        </Container>
        <ApplyButton
          toggleApplyModal={toggleApplyModal}
          coverLetter={this.state.content}
          navigation={this.props.navigation}
          id={this.props.id}
          clearContent={this.clearContent}
          refreshPage={refreshPage}
        />
        <KeyboardSpacer />
      </BigContainer>
    )
  }
}
