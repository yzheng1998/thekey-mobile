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
import uuid from 'uuid/v4'
import axios from 'axios'
import config from '../../../../../../../../../config'
import { SET_RESUMES } from './mutations'

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

class Resumes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resumeListData: this.props.resumes,
      setResumesInput: this.props.resumes,
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
      url: `${config.resumeUploadUrl}`,
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
          resume: finalUrl,
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
    console.log('STATE', this.state.resumeListData)
    const buttonText = this.state.resumeListData.length
      ? 'ADD ANOTHER FILE'
      : 'ADD FILE'
    const initialResumeCount = this.props.resumes.length

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
            mutation={SET_RESUMES}
            onCompleted={() => {
              Alert.alert('Changes saved.')
              this.props.refetch()
            }}
          >
            {(setResumes, { error }) => {
              if (error) {
                Alert.alert(
                  'There was an error deleting your resume. Please try again.',
                  { cancelable: true },
                )
              }
              const setResumesInput = this.state.resumeListData.map(resume => ({
                resume: resume.resume,
                title: resume.title,
                dataSize: resume.dataSize,
              }))
              const shouldEnableSubmit =
                initialResumeCount > 0 ||
                (this.state.resumeListData.length > 0 &&
                  this.state.resumeListData.every(
                    resume => resume.progress === '100%',
                  ))
              return (
                shouldEnableSubmit && (
                  <SubmitButton
                    buttonText="SAVE CHANGES"
                    onPress={() => {
                      const variables = {
                        setResumesInput,
                      }
                      setResumes({ variables })
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
