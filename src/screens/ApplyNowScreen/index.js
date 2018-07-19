import React, { Component } from 'react'
import {
  Title,
  Container,
  Prompt,
  ButtonsContainer,
  LetterInput,
  BackButtonContainer,
  BigContainer,
} from './styles'
import TemplateSelector from './components/ButtonGroup'
import ApplyButton from './components/ApplyButton'
import BackButton from 'react-native-vector-icons/Ionicons'
import KeyboardSpacer from 'react-native-keyboard-spacer'

const CUSTOM_TEMPLATE = 1

const coverLetter =
  'This would be a default cover letter that a user could configure in their settings. From here they could send as-is, or adjust the text to better suit the position in question.'

export default class ApplyNowScreen extends Component {
  constructor() {
    super()
    this.state = {
      selectedIndex: CUSTOM_TEMPLATE,
      content: '',
    }
    this.updateIndex = this.updateIndex
  }

  updateIndex = selectedIndex => {
    this.setState({
      selectedIndex,
      content: selectedIndex === CUSTOM_TEMPLATE ? '' : coverLetter,
    })
  }
  render() {
    const { selectedIndex } = this.state
    return (
      <BigContainer>
        <Container>
          <BackButtonContainer onPress={() => this.props.navigation.goBack()}>
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
          <ButtonsContainer>
            <TemplateSelector
              onPress={this.updateIndex}
              selectedIndex={selectedIndex}
            />
          </ButtonsContainer>
          <LetterInput
            multiline
            autoGrow={false}
            value={this.state.content}
            onChangeText={content => this.setState({ content })}
            placeholderTextColor="rgb(69,77,88)"
          />
        </Container>
        <ApplyButton
          coverLetter={this.state.content}
          navigation={this.props.navigation}
          id={this.props.navigation.getParam('id')}
        />
        <KeyboardSpacer />
      </BigContainer>
    )
  }
}
