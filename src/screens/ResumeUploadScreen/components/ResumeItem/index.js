import React, { Component } from 'react'
import {
  ResumeItemContainer,
  ResumeBody,
  ResumeDetails,
  ResumeTitle,
  ResumeDataSize,
  ClearIconButton,
  ProgressBarEmpty,
  ProgressBarFilled,
} from '../../styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import ClearIcon from 'react-native-vector-icons/MaterialIcons'

export default class ResumeItem extends Component {
  render() {
    const { id, title, dataSize, progress, cancel, refetch } = this.props
    return (
      <ResumeItemContainer>
        <Icon
          name="file-document"
          size={40}
          color="rgb(75, 42, 168)"
          style={{ marginTop: 8 }}
        />
        <ResumeBody>
          <ResumeDetails>
            <ResumeTitle>
              {title} <ResumeDataSize> {dataSize}</ResumeDataSize>
            </ResumeTitle>
          </ResumeDetails>
          <ProgressBarEmpty>
            <ProgressBarFilled
              progress={progress !== undefined ? progress : '100%'}
            />
          </ProgressBarEmpty>
        </ResumeBody>
        <ClearIconButton
          onPress={() => {
            cancel(id)
            refetch()
          }}
        >
          <ClearIcon name="clear" size={24} color="rgb(181, 171, 202)" />
        </ClearIconButton>
      </ResumeItemContainer>
    )
  }
}
