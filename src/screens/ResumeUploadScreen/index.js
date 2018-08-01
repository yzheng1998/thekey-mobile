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
import RNFS from 'react-native-fs'
import uuid from 'uuid/v4'

import gql from 'graphql-tag'
import { SEND_MEMBERSHIP_APPLICATION } from './mutations'

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
    resumeListData: [],
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
        const item = {
          id,
          title: res.fileName,
          dataSize: humanFileSize(res.fileSize),
          progress: '0%',
          url,
        }
        this.setState({
          resumeListData: [item, ...this.state.resumeListData],
        })
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
    const buttonText = this.state.resumeListData.length
      ? 'ADD ANOTHER FILE'
      : 'ADD FILE'
    const userInfo = this.props.navigation.getParam('userInfo')

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

        {this.state.resumeListData.length > 0 &&
          this.state.resumeListData.every(
            resume => resume.progress === '100%',
          ) && (
            <Mutation
              mutation={SEND_MEMBERSHIP_APPLICATION}
              onCompleted={() => {
                this.props.navigation.navigate('Splash')
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
                        ...userInfo,
                        resumes: this.state.resumeListData.map(resume => ({
                          resume: resume.url.substring(
                            0,
                            resume.url.indexOf('.pdf?') + 4,
                          ),
                        })),
                      }
                      const variables = {
                        sendMembershipApplicationInput: { ...userInfoFinal },
                      }
                      sendMembershipApplication({ variables })
                      this.props.navigation.navigate('Splash', {
                        hasApplied: true,
                      })
                    }}
                    buttonText="SUBMIT"
                  />
                )
              }}
            </Mutation>
          )}
      </ScreenContainer>
    )
  }
}

export default withApollo(ResumeUploadScreen)
