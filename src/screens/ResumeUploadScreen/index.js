import React, { Component } from 'react'
import { ScreenContainer, SubtitleView, Subtitle } from './styles'
import Header from '../../components/Header'
import Icon from 'react-native-vector-icons/Feather'
import RegisterButton from '../../components/RegisterButton'

export default class ResumeUploadScreen extends Component {
  state = {
    buttonText: 'ADD FILE',
  }

  updateText = (key, text) => {
    this.setState({ [key]: text })
  }

  render() {
    const disabled = false
    return (
      <ScreenContainer>
        <Header
          title="Your Resume"
          showBack
          onBackPress={() => this.props.navigation.goBack()}
        />
        <SubtitleView>
          <Subtitle>
            Last step, add your resume. This should include GPA, School,
            Extracurriculars, Internships/Work Experience, etc.
          </Subtitle>
        </SubtitleView>
        <RegisterButton
          secondary
          buttonText={this.state.buttonText}
          disabled={disabled}
        >
          <Icon
            name="upload"
            size={20}
            color="rgb(250, 53, 121)"
            style={{ marginRight: 5 }}
          />
        </RegisterButton>
      </ScreenContainer>
    )
  }
}
