import React, { Component } from 'react'
import {
  ModalScreenContainer,
  SubtitleView,
  Subtitle,
} from '../../../../../../styles'
import { SafeAreaView, Alert, ScrollView } from 'react-native'
import RegisterButton from '../../../../../../../../components/RegisterButton'
import SubmitButton from '../../../../../../../../components/SubmitButton'
import ResumeList from '../../../../../../../ResumeUploadScreen/components/ResumeList'
import { withApollo, Mutation } from 'react-apollo'
import {
  DocumentPicker,
  DocumentPickerUtil,
} from 'react-native-document-picker'
import RNFS from 'react-native-fs'
import uuid from 'uuid/v4'
import gql from 'graphql-tag'
import config from '../../../../../../../../../config'
import { UPLOAD_RESUME } from './mutations'

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
class Resumes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resumeListData: this.props.resumes,
    }
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
        const imageNameRegEx = /.*amazonaws.com\/(.*)\?.*/
        const match = imageNameRegEx.exec(data.signS3Url.url)
        const imageName = match.length > 0 ? match[1] : ''
        const finalUrl = config.s3Bucket + imageName
        const item = {
          id,
          title: res.fileName,
          dataSize: humanFileSize(res.fileSize),
          progress: '0%',
          url: finalUrl,
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

    return (
      <ModalScreenContainer>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
          <ScrollView style={{ marginLeft: 12, marginRight: 12 }}>
            <SubtitleView>
              <Subtitle>
                Add your resume. This should include GPA, School,
                Extracurriculars, Internships/Work Experience, etc.
              </Subtitle>
            </SubtitleView>
            <ResumeList
              resumeListData={this.state.resumeListData}
              refetch={this.props.refetch}
              cancel={this.removeFileById}
            />
            <RegisterButton
              secondary
              buttonText={buttonText}
              onPress={this.handlePress}
            />
          </ScrollView>
          <Mutation
            mutation={UPLOAD_RESUME}
            onCompleted={() => {
              Alert.alert('Changes saved.')
              this.props.refetch()
            }}
          >
            {(uploadResume, { error }) => {
              if (error) {
                Alert.alert(
                  'There was an error deleting your resume. Please try again.',
                  { cancelable: true },
                )
              }
              return (
                this.state.resumeListData.length > 0 && (
                  <SubmitButton
                    buttonText="SAVE CHANGES"
                    onPress={() => {
                      const variables = {
                        uploadResumeInput: {
                          resume: this.state.resumeListData[0].url,
                          title: this.state.resumeListData[0].title,
                          dataSize: this.state.resumeListData[0].dataSize,
                        },
                      }
                      uploadResume({ variables })
                    }}
                  />
                )
              )
            }}
          </Mutation>
        </SafeAreaView>
      </ModalScreenContainer>
    )
  }
}

export default withApollo(Resumes)
