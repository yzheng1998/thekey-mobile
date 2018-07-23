import React, { Component } from 'react'
import { ScreenContainer, SubtitleView, Subtitle } from './styles'
import Header from '../../components/Header'
import RegisterButton from '../../components/RegisterButton'
import ResumeList from './components/ResumeList'
import RegistrationProgressBar from '../../components/RegistrationProgressBar'
import { withApollo } from 'react-apollo'
import {
  DocumentPicker,
  DocumentPickerUtil,
} from 'react-native-document-picker'
import RNFS from 'react-native-fs'
import uuid from 'uuid/v4'

import gql from 'graphql-tag'

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

const SIGN_S3_URL = gql`
  mutation signS3Url($signS3UrlInput: SignS3UrlInput!) {
    signS3Url(signS3UrlInput: $signS3UrlInput) {
      url
    }
  }
`

class ResumeUploadScreen extends Component {
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

  handleProgress = (id, { totalBytesExpectedToSend, totalBytesSent }) => {
    const progress = `${(totalBytesSent / totalBytesExpectedToSend) * 100}%`
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

  handleFile = (err, res) => {
    const id = uuid()
    const item = {
      id,
      title: res.fileName,
      dataSize: humanFileSize(res.fileSize),
      progress: '0%',
    }
    this.setState({
      resumeListData: [item, ...this.state.resumeListData],
    })

    this.props.client
      .mutate({
        mutation: SIGN_S3_URL,
        variables: {
          signS3UrlInput: {
            fileName: res.fileName,
            contentType: 'application/pdf',
          },
        },
      })
      .then(async ({ data }) => {
        const {
          signS3Url: { url },
        } = data
        const fileUrl = res.uri.substring(7)
        const split = fileUrl.split('/')
        const name = split.pop()
        const inbox = split.pop()
        const realPath = `${RNFS.TemporaryDirectoryPath}${inbox}/${name}`

        RNFS.uploadFiles({
          toUrl: url,
          files: [
            {
              name,
              filename: name,
              filepath: realPath,
            },
          ],
          headers: {
            'Content-Type': 'application/pdf',
          },
          method: 'PUT',
          progressCallback: result => this.handleProgress(id, result),
          progress: result => this.handleProgress(id, result),
        })
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
    // const userInfo = this.props.navigation.getParam('userInfo')
    // const disabled = !this.state.resumeListData.length
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
        <RegisterButton
          secondary
          buttonText={buttonText}
          onPress={this.handlePress}
        />
      </ScreenContainer>
    )
  }
}

export default withApollo(ResumeUploadScreen)
