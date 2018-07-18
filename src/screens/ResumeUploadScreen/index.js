import React, { Component } from 'react'
import { ScreenContainer, SubtitleView, Subtitle } from './styles'
import Header from '../../components/Header'
import Icon from 'react-native-vector-icons/Feather'
import RegisterButton from '../../components/RegisterButton'
import ResumeList from './components/ResumeList'

export default class ResumeUploadScreen extends Component {
  state = {
    buttonText: 'ADD FILE',
    resumeListData: [
      {
        id: 0,
        title: 'Zena_Resume(2018).pdf',
        dataSize: '3mb',
        progress: '32.5%',
      },
      {
        id: 1,
        title: 'Yuke_Resume(2018).pdf',
        dataSize: '15mb',
        progress: '67.5%',
      },
    ],
  }

  updateText = (key, text) => {
    this.setState({ [key]: text })
  }

  removeFileById = id => {
    const filteredList = this.state.resumeListData.filter(el => el.id !== id)
    this.setState({ resumeListData: filteredList })
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
        <ResumeList
          cancel={this.removeFileById}
          resumeListData={this.state.resumeListData}
        />
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
