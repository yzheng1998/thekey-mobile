import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import {
  Title,
  Container,
  Prompt,
  ButtonsContainer,
  LetterInput,
  BackButtonContainer,
  ApplyButton,
  Placeholder,
  BigContainer,
} from './styles'
import ButtonGroup2 from './ButtonGroup'
import BackButton from 'react-native-vector-icons/Ionicons'
import KeyboardSpacer from 'react-native-keyboard-spacer'

class ApplyNowScreen extends Component {
  constructor() {
    super()
    this.state = {
      selectedIndex: 0,
    }
    this.updateIndex = this.updateIndex.bind(this)
  }
  updateIndex(selectedIndex) {
    this.setState({ selectedIndex })
  }
  render() {
    const { selectedIndex } = this.state
    return (
      <BigContainer>
        <Container>
          <ScrollView>
            <BackButtonContainer onPress={() => this.props.navigation.goBack()}>
              <BackButton
                name="ios-arrow-back"
                size={27}
                color="rgb(148,157,170)"
              />
            </BackButtonContainer>
            <Title>Apply Now</Title>
            <Prompt>
              Tell us in a few words what makes you the right person for this
              job. Your CV and profile information will also be included.
            </Prompt>
            <ButtonsContainer>
              <ButtonGroup2
                onPress={this.updateIndex}
                selectedIndex={selectedIndex}
              />
            </ButtonsContainer>
            <LetterInput
              multiline
              autoGrow={false}
              placeholder="This would be a default cover letter that a user could configure in their settings. From here they could send as-is, or adjust the text to better suit the position in question."
              placeholderTextColor="rgb(69,77,88)"
            />
          </ScrollView>
        </Container>
        <ApplyButton>
          <Placeholder>SEND APPLICATION</Placeholder>
        </ApplyButton>
        <KeyboardSpacer />
      </BigContainer>
    )
  }
}
export default ApplyNowScreen
