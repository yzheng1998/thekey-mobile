import React, { Component } from 'react'
import { ScreenContainer, SubtitleView, Subtitle } from './styles'
import Header from '../../components/Header'
import Icon from 'react-native-vector-icons/Feather'
import RegisterButton from '../../components/RegisterButton'
import ResumeList from './components/ResumeList'
import RegistrationProgressBar from '../../components/RegistrationProgressBar'
import SubmitButton from '../../components/SubmitButton'

export default class ResumeUploadScreen extends Component {
  state = {
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
    const userInfo = this.props.navigation.getParam('userInfo')
    const disabled = !this.state.resumeListData.length
    const buttonText = this.state.resumeListData.length
      ? 'ADD ANOTHER FILE'
      : 'ADD FILE'
    return (
      <ScreenContainer>
        <Header
          title="Your Resume"
          showBack
          onBackPress={() => this.props.navigation.goBack()}
        />
        <RegistrationProgressBar progress="100%" />
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
        <RegisterButton secondary buttonText={buttonText}>
          <Icon
            name="upload"
            size={20}
            color="rgb(250, 53, 121)"
            style={{ marginRight: 5 }}
          />
        </RegisterButton>
        {!disabled && (
          <SubmitButton
            onPress={() =>
              this.props.navigation.navigate('Landing', {
                userInfo: {
                  ...userInfo,
                  resumeListData: this.state.resumeListData,
                },
              })
            }
            buttonText="CONTINUE"
          />
        )}
      </ScreenContainer>
    )
  }
}
