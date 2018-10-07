import React, { Component } from 'react'
import { ScreenContainer, SubtitleView, Subtitle } from './styles'
import { Alert, SafeAreaView } from 'react-native'
import Header from '../../components/Header'
import RegisterButton from '../../components/RegisterButton'
import SubmitButton from '../../components/SubmitButton'
import ResumeList from './components/ResumeList'
import RegistrationProgressBar from '../../components/RegistrationProgressBar'
import { withApollo, Mutation } from 'react-apollo'
import {
  DocumentPicker,
  DocumentPickerUtil,
} from 'react-native-document-picker'
import axios from 'axios'
import uuid from 'uuid/v4'
import { SEND_MEMBERSHIP_APPLICATION } from './mutations'
import config from '../../../config'

import { connect } from 'react-redux'

const mapStateToProps = state => ({
  membershipApplication: state.membershipApplication,
})

function humanFileSize(bytes, si) {
  const thresh = si ? 1000 : 1024
  let bytesCounter = bytes
  if (Math.abs(bytes) < thresh) {
    return `${bytes} B`
  }
  const units = si
    ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']
  let u = -1
  do {
    bytesCounter /= thresh
    u += 1
  } while (Math.abs(bytesCounter) >= thresh && u < units.length - 1)
  return `${bytesCounter.toFixed(1)} ${units[u]}`
}

class ResumeUploadScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resumeListData: props.resumes || [],
    }
  }

  updateText = (key, text) => {
    this.setState({ [key]: text })
  }

  removeFileById = id => {
    const filteredList = this.state.resumeListData.filter(el => el.id !== id)
    this.setState({ resumeListData: filteredList })
  }

  handleProgress = (id, total, sent) => {
    const progress = `${(sent / total) * 100}%`
    this.setState({
      resumeListData: [
        {
          ...this.state.resumeListData.find(el => el.id === id),
          progress,
        },
        ...this.state.resumeListData.filter(el => el.id !== id),
      ],
    })
  }

  handleFile = async (err, res) => {
    const id = uuid()

    const { uri, type: mimeType, fileName } = res
    const formData = new FormData()
    formData.append('file', { uri, type: mimeType, name: fileName })

    const item = {
      id,
      title: res.fileName,
      dataSize: humanFileSize(res.fileSize),
      progress: '0%',
    }
    this.setState({
      resumeListData: [item, ...this.state.resumeListData],
    })

    const result = await axios({
      method: 'post',
      data: formData,
      params: { key: res.fileName },
      url: `${config.restUrl}upload`,
      timeout: 10000, // default is `0` (no timeout)
      onUploadProgress: progressEvent => {
        this.handleProgress(id, progressEvent.total, progressEvent.loaded)
      },
    })
    const finalUrl = result.data.url

    this.setState({
      resumeListData: [
        {
          ...this.state.resumeListData.find(el => el.id === id),
          progress: '100%',
          finalUrl,
        },
        ...this.state.resumeListData.filter(el => el.id !== id),
      ],
    })
  }

  handlePress = () => {
    DocumentPicker.show(
      {
        filetype: [DocumentPickerUtil.pdf()],
      },
      this.handleFile,
    )
  }

  render() {
    const buttonText = this.state.resumeListData.length
      ? 'ADD ANOTHER FILE'
      : 'ADD FILE'

    return (
      <ScreenContainer>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
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
          <RegisterButton
            secondary
            buttonText={buttonText}
            onPress={this.handlePress}
          />
        </SafeAreaView>

        {this.state.resumeListData.every(
          resume => resume.progress === '100%',
        ) && (
          <Mutation
            mutation={SEND_MEMBERSHIP_APPLICATION}
            onCompleted={() => {
              this.props.navigation.navigate('Splash', { hasApplied: true })
              Alert.alert(
                'Thank you for applying to The Key!',
                'We will review your application and get back to you shortly.',
              )
            }}
          >
            {(sendMembershipApplication, { error }) => {
              if (error) {
                Alert.alert(
                  'Failed to upload your application',
                  'There was an error sending in your application. Please try again.',
                  [{ text: 'OK', onPress: () => {} }],
                  { cancelable: true },
                )
              }
              return (
                <SubmitButton
                  onPress={() => {
                    const userInfoFinal = {
                      ...this.props.membershipApplication,
                      resumes: this.state.resumeListData.map(resume => ({
                        resume: resume.url,
                        title: resume.title,
                        dataSize: resume.dataSize,
                      })),
                    }
                    const variables = {
                      sendMembershipApplicationInput: { ...userInfoFinal },
                    }
                    sendMembershipApplication({ variables })
                  }}
                  buttonText={
                    this.state.resumeListData.length > 0
                      ? 'SUBMIT'
                      : 'SUBMIT WITHOUT A RESUME'
                  }
                />
              )
            }}
          </Mutation>
        )}
      </ScreenContainer>
    )
  }
}

export default connect(mapStateToProps)(withApollo(ResumeUploadScreen))
